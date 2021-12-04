import nc from "next-connect";
import { dbConnect } from "../../../config";
import { newOrder } from "../../../controllers/ordersControllers/orderControllers";
 import { isAuthenticatedUser } from "../../../middlewares/authUser";

 import onError from '../../../middlewares/errors';



const handler = nc({onError});
dbConnect();
handler.use(isAuthenticatedUser ).post(newOrder);

export default handler;


