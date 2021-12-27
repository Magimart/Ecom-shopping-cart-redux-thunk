import nc from "next-connect";
import { dbConnect } from "../../../config";
import { allProducts } from "../../../controllers/productController/productControllers";
import onError from '../../../middlewares/errors'



const handler = nc({onError});

dbConnect();

  handler.get(allProducts);
  handler.get((req, res) => {
    return res.status(200).json({message:"testing mode"})
})

export default handler;


