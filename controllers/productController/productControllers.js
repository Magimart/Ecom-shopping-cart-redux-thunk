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



// get all paintings   =>   /api/products
const allProducts = async (req, res) => {

    try{

        //_______________removing fields and adding pagination___________
                           //{{DOMAIN}}/api/products?countryOfArtist=Sudan
         const resPerPage = 8;
         const allProductCount = await Product.countDocuments();
         console.log("here is the paintings count ________________________");
         console.log(allProductCount);
          

        const apiFeatures = new APIFeatures(Product.find(), req.query)
        .search()
        .filter()


        let allStoredProducts = await apiFeatures.query //_________!!
        let filteredProductCount = allStoredProducts.length;


        console.log("here are all products<<<<< ________________________");
        console.log(allStoredProducts)

        apiFeatures.pagination(resPerPage);
        allStoredProducts = await apiFeatures.query.clone();


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



// Create a painting  =>   /api/products/product

const addNewProduct = async(req, res)=> { 
    try{
  
        console.log(req.body)
        const product = await Product.create(req.body);     
         res.status(200).json({
             success: true,
             message: 'Your painting was successfully added',
             data: product
         });

    }catch(error){
        console.log(error)
    }

}

// Get painting details   =>   /api/products/product/:id || /api/products/product/617a4562f2265da6ea3b28af
const getProductDetails = catchAsyncErrors(async (req, res, next) => {

    console.log("her is the reques at the get product details controller")
    console.log(req)
    const productDetails = await Product.findById(req.query.id);

    console.log("her is the product details at controllers")

    console.log(productDetails)

    if (!productDetails) {
        return next(new ErrorHandler('product not found with associated id', 404))
    }

    res.status(200).json({
        success: true, productDetails
    })
});

// Update painting details   =>    /api/products/product/:id
const updateProduct = catchAsyncErrors(async (req, res) => {

    console.log("her is the request at the update method--------------")
    console.log(req.body);

    let product = await Product.findById(req.query.id);

    if (!product) {
        return next(new ErrorHandler('product not found with this ID', 404))
    }

    // if (req.body.images) {

    //     // Delete images associated with the room
    //     for (let i = 0; i < room.images.length; i++) {
    //         await cloudinary.v2.uploader.destroy(room.images[i].public_id)
    //     }

    //     let imagesLinks = []
    //     const images = req.body.images;

    //     for (let i = 0; i < images.length; i++) {

    //         const result = await cloudinary.v2.uploader.upload(images[i], {
    //             folder: 'bookit/rooms',
    //         });

    //         imagesLinks.push({
    //             public_id: result.public_id,
    //             url: result.secure_url
    //         })

    //     }

    //     req.body.images = imagesLinks;

    // }
     
    //---!!/pass id followed by the info that u r updating, third param is to aviod some warnings
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
    addNewProduct,
    getProductDetails,
    updateProduct,
    deleteProduct
}









