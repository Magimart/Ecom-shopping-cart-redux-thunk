import React, { useState, useEffect, useRef } from "react";
import { changeTab } from "../../utils/helpers/helper";


export const TabItem = props => <div className="bg-yellow-00"
 {...props} />;

export const Tabs = ({ defaultIndex = 0, onTabClick, children }) => {


  const [bindIndex, setBindIndex] = React.useState(defaultIndex);

  const changeTab = newIndex => {
    if (typeof onTabClick === 'function') onTabClick(newIndex);
    setBindIndex(newIndex);
  };

  // {changeTab}

  const items = children.filter(item => item.type.name === 'TabItem');

  return (
          <div className="wrapper relative top- mt-8">
                <div className="tab-menu text-white text-lg
                        bg-white
                        bg-gradient-to-r from-transparent via-black to-green-900
                        bg-opacity-25                
                 ">
                    {items.map(({ props: { index, label } }) => (
                    <button
                    key={`tab-btn-${index}`}
                    onClick={() => changeTab(index)}
                    className={bindIndex === index ? 'focus' : ''}
                    >
                    {label}

                    </button>
                    ))}
                 </div>
                <div className="tab-view relative to bg-yellow-600 bg-opacity-30">
                    {items.map(({ props }) => (
                        <div className="bg-yellow-200"
                            {...props}
                            className={`tab-content ${
                            bindIndex === props.index ? 'selected' : ''
                           }`}
                           key={`tab-content-${props.index}`}
                        />
                    ))}
                </div>
           </div>
  );
};


// const tabs =() =>{

//     return(
//         <Tabs defaultIndex="1" onTabClick={console.log}>
//             <TabItem label="as Developer" index="1">
//              worked as software developer forom
//            </TabItem>
//           <TabItem label="Artist" index="2">
//             i have worked in the art industriy
//           </TabItem>
//       </Tabs>
//     )

// }

// export default tabs;