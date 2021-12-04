
import nc from "next-connect";
 import onError from '../../../middlewares/errors';
import { isAuthenticatedUser } from "../../../middlewares/authUser";
import { dbConnect } from "../../../config";
import { currentUserProfile } from "../../../controllers/authControllers/authControllers";



const handler = nc({onError});
dbConnect();

handler.use(isAuthenticatedUser).get(currentUserProfile);
// handler.get(currentUserProfile);



export default handler;
