import React, { useState, useEffect, useRef } from "react";
import { setOnChange, items } from "../../utils/helpers/helper";


export const MentorShipTabs = ({defaultIndex = 0, onTabClick, children }) => {


  const [bindIndex, setBindIndex] = React.useState(defaultIndex);


const changeTab = index => {
    setOnChange(index, setBindIndex);
  };

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



