require('dotenv').config();
const path = require('path');

// const dev = process.env.NODE_ENV !== 'production'
// export const server = dev ? 'http://localhost:3000' :'https://magima-portfolio.vercel.app/'


module.exports = {
    env : { 

            SERVER: process.env.SERVER,
            NEXTAUTH_URL:'https://magima-portfolio.vercel.app/', // for production

            //_______stripe pay
            STRIPE_PUBLIC_KEY: '',
            STRIPE_SECTRET_KEY: '',
            STRIPE_WEBHOOK_SECRET: '',
          
            MONGODB_URI: process.env.MONGODB_URI,
            DATABASE_CLOUD: process.env.DATABASE_CLOUD,
        
            SENDGRID_API: process.env.SENDGRID_API,
            SMTP_SERVER: process.env.SMTP_SERVER,
            EMAIL_FROM: process.env.EMAIL_FROM,

            SECRET: process.env.SECRET,
            GOOGLE_ID: process.env.GOOGLE_ID,
            GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

            FACEBOOK_ID:process.env.FACEBOOK_ID,
            FACEBOOK_SECRET:process.env.FACEBOOK_SECRET,
            JWT_SECRET: process.env.JWT_SECRET,
            
            //____cloudinary strings
            CLOUDINARY_NAME:process.env.CLOUDINARY_NAME,
            CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
            CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,             
         }, 

           //  config image
            images: {
            domains: ['res.cloudinary.com'],
            loader: 'imgix',  // this is a hack until the bug is fixed,
            path: "https://noop/"
        },

        //__sass
        trailingSlash: true,
        webpackDevMiddleware: config => {  
          config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300
          }

          return config
        },
        sassOptions: {
          includePaths: [path.join(__dirname, 'styles')]
        },

      eslint: {    ///____!!ignoring eslints
              ignoreDuringBuilds: true,
      },
      
 
}