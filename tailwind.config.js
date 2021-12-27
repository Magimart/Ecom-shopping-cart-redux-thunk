
 //________________________to remove unused styled


 module.exports = {

     future: {
              removeDeprecatedGapUtilities: true,
              purgeLayersByDefault: true,
     },
     experimental: {
       additionalBreakpoint: true,
       extendedFontSizeScale: true,
       extendedSpacingScale: true,
      },
      purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
      darkMode: false, // or 'media' or 'class'
      theme: {
              extend: {
                        zIndex: {
                                   '-1': '-1',
                                   '-2': '-2',
                                   '-3': '-3',
                                    '-4': '-4',
                                    '-5': '-5',
                                    '-10': '-10',
                                    '0': '0',
                                    '1': '1',
                                    '2': '2',
                                    '3': '3',
                                    '5': '5',
                                   '10': '10',
                                   '99': '99',
                                   '999': '999',

                        }, 
                        keyframes: {
                          wiggle: {
                            '0%, 100%': { transform: 'rotate(-3deg)' },
                            '50%': { transform: 'rotate(3deg)' },
                          }
                         },    
              },
              spacing: {
                // '1': '8px',
                // '2': '12px',
                // '3': '16px',
                // '4': '24px',
                // '5': '32px',
                // '6': '48px',
                px: '1px',
                0: '0',
                0.5: '0.125rem',
                1: '0.25rem',
                1.5: '0.375rem',
                2: '0.5rem',
                2.5: '0.625rem',
                3: '0.75rem',
                3.5: '0.875rem',
                4: '1rem',
                5: '1.25rem',
                6: '1.5rem',
                7: '1.75rem',
                8: '2rem',
                9: '2.25rem',
                10: '2.5rem',
                11: '2.75rem',
                12: '3rem',
                14: '3.5rem',
                16: '4rem',
                20: '5rem',
                24: '6rem',
                28: '7rem',
                32: '8rem',
                36: '9rem',
                40: '10rem',
                44: '11rem',
                48: '12rem',
                52: '13rem',
                56: '14rem',
                60: '15rem',
                64: '16rem',
                72: '18rem',
                80: '20rem',
                96: '24rem',
                128: '32rem',
                144: '36rem',
              },
              screens: {
                       
                        //__________________________custom breakpoints__________________
                       xxxs: { max: "359px"},
                         xxs: { min: "360px", max: "475px" },
                         xs: { min: "475px", max: "640px" },
                         sm: { min: "640px", max: "768px" },
                         md: { min: "768px", max: "1023px" },
                         lg: { min: "1023px", max: "1279px" }, // x from 1024px
                         xl: { min: "1279px" }, // x from 1080px
                                                  //xxl: { min: "1600px" },
                         xxsw: { min: "480px" }, // wide view
                         xsw: { min: "600px" }, // wide view --blackberry playbook
                         xlsw: { min: "635px" }, // wide view
              },      
              backgroundSize: {
                                'cover': 'cover',
                                'contain': 'contain',
                                 //  '50%': '50%',
                                 //  '16': '4rem',
              },
              objectPosition: {   //--------testing
                                 bottom: 'bottom',
                                 center: 'center',
                                 left: 'left',
                                 'left-bottom': 'left bottom',
                                 'left-top': 'left top',
                                 right: 'right',
                                 'right-bottom': 'right bottom',
                                 'right-top': 'right top',
                                  top: 'top',
                                 'center-bottom': 'center bottom',
                                 'center-top': 'center top',
              },
              boxShadow: {
                             sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                             DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                             md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                             lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                             xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                             '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                             '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                             inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
                             none: 'none',
              },
              container: { //_________testing
                              center: true,
                              padding: "1.5rem",
              },
              debugScreens: {   //___debuged screen at the bottom left
                                  position: ['bottom', 'left'],
              },
      },
      variants: {
                 extend: {  //______testing
                           position: ['hover', 'focus'],
                           fontWeight: ['hover', 'focus'] //___warning this may cause junk
                },
      },
      plugins: [
                  // require('tailwindcss-debug-screens'),
                  require( 'tailwindcss' ),   //___________remove all if not compatible
                  require( 'precss' ),
                  require( 'autoprefixer' ),

              ],
} 


