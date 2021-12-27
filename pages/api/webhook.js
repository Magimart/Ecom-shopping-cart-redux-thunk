import nc from 'next-connect'
import {dbConnect} from '../../config'
import { webhookCheckout } from '../../controllers/paymentControllers/paymentControllers';
import onError from '../../middlewares/errors'

const handler = nc({ onError });


dbConnect();

export const config = {
    api: {
        bodyParser: false,
    }
}

handler.post(webhookCheckout)

export default handler;



