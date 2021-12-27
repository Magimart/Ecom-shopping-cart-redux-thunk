require('dotenv').config();
const path = require('path');

module.exports = {
  env : {    

    //_______stripe pay
    STRIPE_PUBLIC_KEY: 'pk_test_51K1UVmA7pcTNwUoc9kSUDw8ybnuqjMCT6rlE0PjENpp1KbKduRXvdNEt8lI4PlHoQ2y71DjqmG7LMKSxACTMtq7v00Co8KLAxo',
    STRIPE_SECTRET_KEY: 'sk_test_51K1UVmA7pcTNwUocrF2RpZ370pUiZZQZQZKLOZ9FZ6McY3ugluFodVEUjIvGjVbL9gUxnqeHuQrjuyt1jPBMfdSV00EuifWoQa',
    STRIPE_WEBHOOK_SECRET: 'whsec_0VirPufcEMqCple3LInnietaB8e1BXjD',
  
 
     MONGODB_URI: 'mongodb://localhost:27017/magimabioDb',
     DATABASE_CLOUD:'mongodb+srv://portfolioDb:frederick1610@final-projects-wbs-codi.pulb6.mongodb.net/bioDB?retryWrites=true&w=majority',
  
    // NEXTAUTH_URL:'http://localhost:3000', // for production

    SENDGRID_API:'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',
    SMTP_SERVER:'smtp://apikey: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@smtp.sendgrid.net:587',
    EMAIL_FROM:'develope2210@gmail.com',
    NEXTAUTH_URL:'http://localhost:3000',

    SECRET:'Thisisourlittlesecret',
    GOOGLE_ID: '760338344196-ru3ovhjiaonodc71ilj7cig774pmda6c.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET:'EfuHfjoMy0B-8IYHs0BfP-Mm',

    FACEBOOK_ID:'1035932170123223',
    FACEBOOK_SECRET:'607454e8dc6e1aa22fbf4b07c72b2657',
    JWT_SECRET:'kwmfelixfelix',
    
  //____cloudinary strings
  CLOUDINARY_NAME:'magimaart',
  CLOUDINARY_API_KEY:'399829674291311',
  CLOUDINARY_API_SECRET:'4rfscNDKgSQQhPu_mxoFiNYsqoU',
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
