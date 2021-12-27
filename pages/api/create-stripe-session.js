import nc from "next-connect";
import { dbConnect } from "../../config";
import { CreateStripeSession } from "../../controllers/paymentControllers/paymentControllers";
import onError from '../../middlewares/errors'
import { isAuthenticatedUser } from "../../middlewares/authUser";



const handler = nc({onError});

dbConnect()

handler.get((req, res) => {
  return res.status(200).json({message:"testing mode"})
})

  export default handler;
