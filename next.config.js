require('dotenv').config();
const path = require('path');

module.exports = {
  env : {    

    //_______stripe pay
    STRIPE_PUBLIC_KEY: '',
    STRIPE_SECTRET_KEY: '',
    STRIPE_WEBHOOK_SECRET: '',
  
 
     MONGODB_URI: 'mongodb://localhost:27017/magimabioDb',
     DATABASE_CLOUD:'mongodb+srv://',
  
    NEXTAUTH_URL:'http://localhost:3000', // for production
   //  NEXTAUTH_URL_INTERNAL: devNextAuthUrl

    SENDGRID_API:'',
    SMTP_SERVER:'',
    EMAIL_FROM:'develope2210@gmail.com',
    NEXTAUTH_URL:'',

    SECRET:'',
    GOOGLE_ID: '',
    GOOGLE_CLIENT_SECRET:'',

    FACEBOOK_ID:'',
    FACEBOOK_SECRET:'',
    JWT_SECRET:'',
    
  //____cloudinary strings
  CLOUDINARY_NAME:'magimaart',
  CLOUDINARY_API_KEY:'',
  CLOUDINARY_API_SECRET:'',

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

 eslint: {    ///____!!
         ignoreDuringBuilds: true,
 }
}
