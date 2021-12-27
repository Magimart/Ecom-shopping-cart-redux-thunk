import nc from 'next-connect'
import { dbConnect } from "../../../config";
import { currentUserProducts } from '../../../controllers/productController/productControllers';
import { isAuthenticatedUser } from "../../../middlewares/authUser";
import onError from '../../../middlewares/errors'


const handler = nc({ onError });

dbConnect();

handler.get((req, res) => {
    return res.status(200).json({message:"testing mode"})
})

export default handler;



