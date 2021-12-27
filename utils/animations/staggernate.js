

       export const staggernateContent = (onFirstMount) => ({
            animate: {
              transition: { staggerChildren: 0.1, delayChildren: onFirstMount ? 1.8 : 0 },
            },
          });


                   
       export  const staggernateContentDelayed = (onFirstMount) => ({
          animate: {
            transition: { staggerChildren: 0.1, delayChildren: onFirstMount ? 1.9 : 0 },
          },
        });