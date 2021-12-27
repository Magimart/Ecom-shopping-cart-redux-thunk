
import nc from "next-connect";
 import onError from '../../../middlewares/errors';
import { isAuthenticatedUser } from "../../../middlewares/authUser";
import { dbConnect } from "../../../config";
// 


const handler = nc({onError});
dbConnect();

handler.get((req, res) => {
    return res.status(200).json({message:"testing mode"})
})
export default handler;
