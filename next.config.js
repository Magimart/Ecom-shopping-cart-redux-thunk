

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
                  STRIPE_PUBLIC_KEY: '',
                  STRIPE_SECTRET_KEY: '',
                  STRIPE_WEBHOOK_SECRET: '',
            
//_______db strings
                    MONGODB_URI: '',
                    DATABASE_CLOUD:'',
                 
                   NEXTAUTH_URL:'http://localhost:3000', // for production
                  //  NEXTAUTH_URL_INTERNAL: devNextAuthUrl,

                //____cloudinary strings
                  CLOUDINARY_NAME:'magimaart',
                  CLOUDINARY_API_KEY:'',
                  CLOUDINARY_API_SECRET:'',
              
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
