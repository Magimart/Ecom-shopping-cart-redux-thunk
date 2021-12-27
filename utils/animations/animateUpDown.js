




      export  const fromUp = {
            initial: { y: -20, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: [0.6, -0.05, 0.01, 0.99],
              },
            },
          };
          export  const fromUpSlow = {
            initial: { y: -50, opacity: 0 },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
                ease: [0.6, -0.05, 0.11, 0.99],
              },
            },
          };