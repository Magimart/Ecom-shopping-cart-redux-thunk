import nc from 'next-connect'
import { dbConnect } from "../../../config";
import onError from '../../../middlewares/errors'

  // => api/products/all-user-associated-products
  
const handler = nc({ onError });

dbConnect();

handler.get((req, res) => {
    return res.status(200).json({message:"testing mode"})
})
    

export default handler;

