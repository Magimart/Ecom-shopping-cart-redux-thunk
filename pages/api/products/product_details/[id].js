// an equivalent of /: id param
import nc from "next-connect";
import { dbConnect } from "../../../../config";
import { getProductDetails, updateProduct, deleteProduct } from "../../../../controllers/productController/productControllers";
import onError from '../../../../middlewares/errors'

const handler = nc({onError});

dbConnect();

  //___all muth have auth middlewares
  handler.get(getProductDetails); 
  handler.put(updateProduct); 
  handler.delete(deleteProduct); 

 
export default handler;













