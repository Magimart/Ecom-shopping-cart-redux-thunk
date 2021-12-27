export const animateHeaderOne = {
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


 export const animateSmall = () => ({
    initial: { y: 300, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  });


  export const animateOnDesktop = () => ({
    initial: { x: 800, opacity: 0 },
    animate: {
      x: 8,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  });