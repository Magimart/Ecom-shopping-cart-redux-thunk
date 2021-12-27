import Order from "../../models/order";


//_____________to get all orders for the current user
const currentUserOrders = async(req, res ) => { //getproduct

  try{
          const myOrders = await Order.find({user: req.user._id})
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
              myOrders 
          });

        }catch(error){
            console.error(error.message)
      }
};


//__________________________oder detail
// Get order details   =>   /api/orders/:id
const getOrderDetails = async (req, res) => {

        try {
                const order = await Order.findById(req.query.id)
                .populate({
                  path: 'purchasedProduct',
                  select: 'title price qty'
                })
                .populate({
                  path: 'shippingAddress',
                  select: 'name email address city state zip country'
                })
                .populate({
                    path: 'user',
                    select: 'name email'
                })
          
            res.status(200).json({
                success: true,
                order
            })
        } catch (error) {

          console.log(error)
          
        }
 }


  // make new order 

  const newOrder =  async(req, res ) => {

    try{
         const {                 
                  purchasedProduct,
                  shippingAddress, 
                  paymentMethod,
                  amountPaid 
               } = req.body;
  
          
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
    getOrderDetails, 
    currentUserOrders
  }




