import nc from "next-connect";
import { dbConnect } from "../../config";
import Info from "../../../models/pageInfo";


 const handler = nc();
     dbConnect();
  //_______________________________________
    handler.get( async(req, res) => {
        
        try {        
              const allInfo = await Info.find({}).exec();
                 res.status(200).json({ success: true,
                                        message: allInfo
                                     });
            } catch(err){
                console.error(err.message);
            }
                 
        });

export default handler;


