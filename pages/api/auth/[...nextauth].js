
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'

import User from '../../../models/user'
import { dbConnect } from "../../../config";

export default NextAuth({
    session: {
         jwt: true,
            // Use JSON Web Tokens for session instead of database sessions.
             // This option can be used with or without a database for users/accounts.
               // Note: `jwt` is automatically set to `true` if no database is specified.
               //jwt: false,

             // Seconds - How long until an idle session expires and is no longer valid.
            // maxAge: 30 * 24 * 60 * 60, // 30 days
            maxAge:60 * 60, //  expires in 1 hour

    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {

                dbConnect();

                const { email, password } = credentials;

                // Check if email and password is entered
                if (!email || !password) {
                    throw new Error('Please enter email or password');
                }

                // Find user in the database
                const user = await User.findOne({ email }).select('+password')

                if (!user) {
                    throw new Error('Invalid Email or Password')
                }
                console.log("here is user before saving----- <<<<<<")
                console.log(user)

                // Check if password is correct or not
                const isPasswordMatched = await user.comparePassword(password);

                if (!isPasswordMatched) {
                    throw new Error('Invalid Email or Password')
                }
                  console.log("problem promise is pending why why!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                  console.log(user)
                return Promise.resolve(user)

            }
        })
    ],
    callbacks: {
        jwt: async (token, user) => {

            user && (token.user = user)
            return Promise.resolve(token)
        },
        session: async (session, user) => {

            session.user = user.user
            return Promise.resolve(session)
        }
    },
    //_______persisting the database
    database: process.env.MONGODB_URI,  // !sureWithredux
    	debug: true,


});

