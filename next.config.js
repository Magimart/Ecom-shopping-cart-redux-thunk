require('dotenv').config();
const path = require('path');

//npm WARN deprecated flatten@1.0.3: flatten is deprecated in favor of utility frameworks such as lodash.
//npm WARN deprecated querystring@0.2.1: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
//$ npm i -g npm
//$ npm i --save lodash

module.exports = {
  env : {  
    
    SERVER: process.env.SERVER,
    NEXTAUTH_URL:'https://ecom-shopping-cart-redux-thunk.vercel.app/', // for production


    //_______stripe pay
    STRIPE_PUBLIC_KEY: '',
    STRIPE_SECTRET_KEY: '',
    STRIPE_WEBHOOK_SECRET: '',
  
 
    MONGODB_URI: 'mongodb://localhost:27017/magimabioDb',
    DATABASE_CLOUD:'mongodb+srv://portfolioDb:frederick1610@final-projects-wbs-codi.pulb6.mongodb.net/bioDB?retryWrites=true&w=majority',

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

 eslint: {    ///____!!ignoring eslints
         ignoreDuringBuilds: false,
 }
}
