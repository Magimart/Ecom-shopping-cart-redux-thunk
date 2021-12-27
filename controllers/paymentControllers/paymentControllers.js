import User from "../../models/user";
import Order from "../../models/order";
import absoluteUrl from 'next-absolute-url'
const stripe = require('stripe')(process.env.STRIPE_SECTRET_KEY);
 


const CreateStripeSession = async(req, res) => {

  try{

          // Get origin
      const { origin } = absoluteUrl(req);

      // const  { purchasedProduct, shippingAddress, amountPaid }  = req.body; 
      const  { purchasedProduct }  = req.body; 

        
              const session = await stripe.checkout.sessions.create({
                  payment_method_types: ['card'],
                  // line_items: [transformedItem], 
                  line_items: await purchasedProduct && purchasedProduct.map((el) => {

                        return {
                           price_data: {
                               currency: 'usd',
                               product_data: {  // find product by id
                                 name: el && el.title,
                               },
                               unit_amount: el && el.price * 100,
                           },
                           quantity: el.qty,
                         }                        
                  }),            
                  mode: 'payment',
                  success_url: `${origin}/orders/my-order`, //_______redirect user profile page
                  cancel_url: `${origin}/shop/cart`,
                  metadata: {},
                });
  
            //  res.status(200).json({ id: session.id });
             res.status(200).json(session)
 

        }catch(error){
            console.log(error)
        }
 }


// Create new booking after payment   =>   /api/webhook

const webhookCheckout = async (req, res) => {

  const rawBody = await getRawBody(req);

  try {

        const signature = req.headers['stripe-signature']

        const event = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);

      if (event.type === 'checkout.session.completed') {

          const session = event.data.object;

          const purchasedProduct = session.client_reference_id;
          const user = (await User.findOne({ email: session.customer_email })).id;


          const amountPaid = session.amount_total / 100;

          const paymentMethod = {
              id: session.payment_intent,
              status: session.payment_status
          }

          const order = await Order.create({
              user,
              purchasedProduct,
              shippingAddress, 
              paymentMethod,
              amountPaid, 
              paidAt: Date.now()
          })

          res.status(200).json({ success: true }, order)

      }

  } catch (error) {
      console.log('Error in Stripe Checkout Payment => ', error);
  }

}


export   {
    webhookCheckout,
    CreateStripeSession
};


