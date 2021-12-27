import cloudinary from 'cloudinary'
import Product from "../../models/product";
import APIFeatures from '../../utils/helpers/apiFeatures';
import catchAsyncErrors from '../../middlewares/catchAsyncErrors';
import ErrorHandler from '../../utils/helpers/errorHandlers';
// import sendEmail from '../utils/sendEmail'


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



//_____________to get only current user products /api/products/current-user-products
const currentUserProducts = async(req, res ) => { 

    try{

            const myProducts = await Product.find({user: req.user._id})
            .populate({
              path: 'title',
              select: 'title'
            })
            .populate({
                path: 'price',
                select: 'price'
              })
            .populate({
                path: 'category',
                select: 'painting sculpture wall hanging water colours'
              }) 
            .populate({
                path: 'countInStock',
                select: 'countInStock'
              })
            .populate({
              path: 'user',
              select: 'fName sName country address'
            })
            .populate({
                path: 'description',
                select: 'description'
              })
              .populate({
                path: 'dimenssion',
                select: 'width height'
              })
              .populate({
                path: 'medium',
                select: 'mixed medium on canvas oils on canvas ink on paper'
              })
              .populate({
                path: 'imagesOfProduct',
                select: 'public_id url'
              })

        
            res.status(200).json({
                success: true,
                myProducts 
            });
  
          }catch(error){
              console.error(error.message)
        }
  };



// get all paintings   =>   /api/products
const allProducts = async (req, res) => {

    try{

         const resPerPage = 8;
         const allProductCount = await Product.countDocuments();          

         const apiFeatures = new APIFeatures(Product.find({}), req.query)
         .search()
         .filter()


        let allStoredProducts = await apiFeatures.query //_________!!
        let filteredProductCount = allStoredProducts.length;

        apiFeatures.pagination(resPerPage);

        allStoredProducts = await apiFeatures.query;

        // allStoredProducts = await apiFeatures.query.clone();
         //TypeError: apiFeatures.query.clone is not a function
        res.status(200).json({
        success: true,
        allProductCount,
        resPerPage,
        filteredProductCount,
        allStoredProducts
        });

        }catch(error){
        console.log(error)
        }

    }



// Get painting details   =>   /api/products/product/:id || /api/products/product/617a4562f2265da6ea3b28af
const getProductDetails = async (req, res, next) => {

         try{ 
            const productDetails = await Product.findById(req.query.id);
        
            if (!productDetails) {
                return next(new ErrorHandler('product not found with associated id', 404))
            }
        
            res.status(200).json({
                 success: true,
                 productDetails
            })

         }catch(error){
             console.log(error)
         }
};

// Update painting details   =>    /api/products/product/:id
const updateProduct = catchAsyncErrors(async (req, res) => {


    let product = await Product.findById(req.query.id);

    if (!product) {
        return next(new ErrorHandler('product not found with this ID', 404))
    }


    product = await Product.findByIdAndUpdate(req.query.id, req.body, { 
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })

})


// delete product    =>   /api/products/product/:id || /api/products/product/617a4562f2265da6ea3b28af
const deleteProduct = catchAsyncErrors(async (req, res, next) => {

    // const product = await product.findByIdAndDelete(req.query.id); waks
    const product = await Product.findById(req.query.id);


    if (!product) {
        return next(new ErrorHandler('product not found with associated id', 404))
    }

    product.remove()
    res.status(200).json({
        success: true,
        message: "product successfully deleted"
    })
});


export { 
    allProducts,
    getProductDetails,
}









