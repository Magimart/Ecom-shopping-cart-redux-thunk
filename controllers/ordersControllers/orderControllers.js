import Order from "../../models/order";


//_____________to get all orders for the current user
const currentUserOrders = async(req, res ) => { //getproduct

    try{

              const myOdrders = await Order.find({user: req.user._id})
              .populate({
                path: 'purchasedProduct',
                select: 'title price qty'
              })
              .populate({
                path: 'user',
                select: 'name email'
              })
          
              res.status(200).json({
                  success: true,
                  myOdrders 
              });
  
            }catch(error){
                console.error(error.message)
            }
  
  };


  // make new order 

  const newOrder =  async(req, res ) => {

    console.log(" here the request body at the new order purchase----------------")
console.log(req)
    try{
         const {                 
                  purchasedProduct,
                  shippingAddress, 
                  paymentMethod,
                  amountPaid 
               } = req.body;
  
  
              console.log("below is the query object----------------")
              console.log(req)
          
              const newOrder = await Order.create({
                     purchasedProduct,
                     user: req.user._id,
                     shippingAddress, 
                     paymentMethod,
                     amountPaid, 
                     paidAt: Date.now()
              })
  
          
              res.status(200).json({
                  success: true,
                  newOrder
              });
  
            }catch(error){
                console.error(error.message)
            }
  
  };








  export {
    newOrder, 
    currentUserOrders
  }




