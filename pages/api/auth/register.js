
import nc from "next-connect";
import { dbConnect } from "../../../config";
// import { registerUser } from "../../../controllers/authControllers/authControllers";


// import onError from '../../../middlewares/errors'

// const handler = nc({onError});
const handler = nc();


console.log("at regiter user<<<<<<<<<<<<<<<<<<<<")
dbConnect();
handler.get((req, res) => {
    return res.status(200).json({message:"testing mode"})
})

export default handler;