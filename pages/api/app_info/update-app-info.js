
import nc from "next-connect";
import { dbConnect } from "../../../config";
 import onError from '../../../middlewares/errors';
import { isAuthenticatedUser } from "../../../middlewares/authUser";
import { updateAppInfo } from "../../../controllers/publishAppInfoControllers/appInfoControllers";


const handler = nc({onError});
dbConnect();

handler.use(isAuthenticatedUser).put(updateAppInfo);

export default handler;





