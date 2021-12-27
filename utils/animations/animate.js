import { useViewDimenssion } from "../helpers/ViewPortWindow";


export const animateFromTop = {  
  enter: (direction) => {
    return {
      y: direction > 0 ? -800 : 800,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: (direction ) => {
    return {
      zIndex: 0,
       y: direction < 0 ? -800 : 800,
      opacity: 0, 
    };
  }
}; 



export const animateFromRight = {  
    enter: (direction) => {
      return {
        x: direction > 0 ? -1000 : 1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction ) => {
      return {
        zIndex: 0,
         x: direction < 0 ? -1000 : 1000,
        opacity: 0, 
      };
    }
  }; 
  
  // export const enterFromLeft = {
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   hidden: {
  //     opacity: 0,
  //      x: -200,
  //       x:100, //with small screens

  //   },
  // };

  // export const enterFromLeft = {
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //   },
  //   hidden: {
  //     opacity: 0,
  //      x: 100,

  //   },
  // };


  

  export const enterFromLeft = {
    visible: {
      opacity: 1,
      x: 0,
    },
    hidden: {
          x:  -200,
          opacity: 0
    },
  };
  export const enterFromLeftSmall = {
    visible: {
      opacity: 1,
      y: 0,
      scale:1
    },
    hidden: {
      opacity: 1,
            y: 100,
          opacity: 0.5
    },
  };

  export const bounceUpDownFromDown = {
    visible: {
      opacity: 1,
      // y: [120, 50, 0, -270, 40],
      // y: [120, -150, -20, -270, 40],bouncing
      y: [-170, -50, 20, -270, 40],
       scale:0.9,

    },
    hidden: {
      opacity: 0,
          y:  -200,
           scale:0
    },
  };

  //_____________nooohere
  export const enterFromLeftBig = {
    visible: {
      opacity: 1,
      y: 0,
      scale:1,
    },
    hidden: {
      // opacity: 1,
          y:  -400,
           opacity: 0,
          scale:-0.3
    },
  };


  export const enterFromRight = {
    visible: {
      opacity: 1,
      // x: 0,
      x: 0,
    },
    hidden: {
      opacity: 0,
        // x: 350, biger view
       x: 200,
    },
  };

  export const animateFromLeft = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1600,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction ) => {
      return {
        zIndex: 0,
        x: direction < 0 ? -1000 : 1000,
        opacity: 0, 
      };
    }
  };


