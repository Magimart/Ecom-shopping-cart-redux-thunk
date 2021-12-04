

require('dotenv').config();


const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
  } = require('next/constants');
  const path = require('path');

  // This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
  module.exports = (phase) => {
    // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
    const isDev = phase === PHASE_DEVELOPMENT_SERVER
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
    // when `next build` or `npm run build` is used
    const isStaging =
      phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'
  
    // console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  

    //  const devNextAuthUrl = "http://10.240.8.16"
      const env = {
                  RESTURL_SPEAKERS: (() => {
                    if (isDev) return 'http://localhost:3000'
                    if (isProd) {
                      return 'https://www.magimart.org'
                    }
                    if (isStaging) return 'http://localhost:11639'
                    return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)'
                  })(),
                  
                  RESTURL_SESSIONS: (() => {
                    if (isDev) return 'http://localhost:3000'
                    if (isProd) return 'https://www.magimart.org'
                    if (isStaging) return 'http://localhost:11639'
                    return 'RESTURL_SESSIONS:not (isDev,isProd && !isStaging,isProd && isStaging)'
                  })(),
                  
                  //_______stripe pay
                  STRIPE_PUBLIC_KEY: 'pk_test_51K1UVmA7pcTNwUoc9kSUDw8ybnuqjMCT6rlE0PjENpp1KbKduRXvdNEt8lI4PlHoQ2y71DjqmG7LMKSxACTMtq7v00Co8KLAxo',
                  STRIPE_SECTRET_KEY: 'sk_test_51K1UVmA7pcTNwUocrF2RpZ370pUiZZQZQZKLOZ9FZ6McY3ugluFodVEUjIvGjVbL9gUxnqeHuQrjuyt1jPBMfdSV00EuifWoQa',
                  STRIPE_WEBHOOK_SECRET: 'whsec_0VirPufcEMqCple3LInnietaB8e1BXjD',
            
//_______db strings
                    MONGODB_URI: 'mongodb://localhost:27017/magimabioDb',
                    DATABASE_CLOUD:'mongodb+srv://portfolioDb:frederick1610@final-projects-wbs-codi.pulb6.mongodb.net/<portfolioDb>?retryWrites=true&w=majority',
                  // DEV_URL: "http://localhost:3000",
                 
                   NEXTAUTH_URL:'http://localhost:3000', // for production
                  //  NEXTAUTH_URL_INTERNAL: devNextAuthUrl,

                //____cloudinary strings
                  CLOUDINARY_NAME:'magimaart',
                  CLOUDINARY_API_KEY:'399829674291311',
                  CLOUDINARY_API_SECRET:'4rfscNDKgSQQhPu_mxoFiNYsqoU',
               // CLOUDINARY_API_ENVIROMENT_VARIABLE=CLOUDINARY_URL=cloudinary://399829674291311:4rfscNDKgSQQhPu_mxoFiNYsqoU@magimaart,
              
              //  config image
               images: {
                domains: ['res.cloudinary.com'],
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
        }
  
    return {
      env,
    }
  }