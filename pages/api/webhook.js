import nc from 'next-connect'
import dbConnect from '../../config/dbConnect'

import onError from '../../middlewares/errors'
import { webhookCheckout } from '../../create-stripe-session';

const handler = nc({ onError });

dbConnect();

export const config = {
    api: {
        bodyParser: false,
    }
}

handler.post(webhookCheckout)

export default handler;



