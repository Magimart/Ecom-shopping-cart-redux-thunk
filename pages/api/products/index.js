import nc from "next-connect";
import { dbConnect } from "../../../config";
import { addNewProduct, allProducts } from "../../../controllers/productController/productControllers";
import onError from '../../../middlewares/errors'
 import { isAuthenticatedUser } from "../../../middlewares/authUser";


const handler = nc({onError});

dbConnect();

  handler.get(allProducts);
  handler
   .use(isAuthenticatedUser )
   .post(addNewProduct);

export default handler;


