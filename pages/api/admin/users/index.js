import nc from 'next-connect';
import { dbConnect } from "../../../../config";

import onError from '../../../../middlewares/errors';
import { isAuthenticatedUser } from '../../../../middlewares/authUser';
import { allAdminUsers } from '../../../../controllers/authControllers/authControllers';




const handler = nc({ onError });


dbConnect();

handler.use(isAuthenticatedUser)
       .get(allAdminUsers)

export default handler;