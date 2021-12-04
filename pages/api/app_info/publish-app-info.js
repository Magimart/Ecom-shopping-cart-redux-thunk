import nc from "next-connect";
import { dbConnect } from "../../../config";
import { PublishAboutInfo } from "../../../controllers/publishAppInfoControllers/appInfoControllers";

{PublishAboutInfo }
// import onError from '../../../middlewares/errors'

// const handler = nc({onError});
const handler = nc();

dbConnect();
handler.post(PublishAboutInfo);


export default handler;