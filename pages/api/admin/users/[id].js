import nc from 'next-connect';
import { dbConnect } from '../../../../config';
import { getUserDetails, updateUser, deleteUser } from '../../../../controllers/authControllers/authControllers';
import { isAuthenticatedUser } from '../../../../middlewares/authUser';
import onError from '../../../../middlewares/errors';



const handler = nc({ onError });

dbConnect();

handler
    // .use(isAuthenticatedUser, authorizeRoles('admin'))
    .use(isAuthenticatedUser)
    .get(getUserDetails)


handler
    // .use(isAuthenticatedUser, authorizeRoles('admin'))
    .use(isAuthenticatedUser)
    .put(updateUser)


handler
    // .use(isAuthenticatedUser, authorizeRoles('admin'))
    .use(isAuthenticatedUser)
    .delete(deleteUser)

export default handler;
