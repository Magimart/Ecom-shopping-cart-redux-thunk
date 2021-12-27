import { useCallback, useState } from 'react';


export const setOnChange = (index, setBindIndex ) => {
    let newIndex = index;
    if (typeof onTabClick === 'function') onTabClick(newIndex);
    setBindIndex(newIndex);
  };



export const useToggle = (initialValue = false) => {
  
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

export const handleToggle = ({setToggleOnClick}) => {
  return setToggleOnClick(state => !state);
}


export const onToggle = ({ setToggleOnClick}) => {
  return handleToggle({setToggleOnClick})
}

// export const handleCloseOpen = ({setToggleOnClick, tongleOnClick}) =>{
//   return (
//    setToggleOnClick(!tongleOnClick)
//   )           
// };


//____________shoping cart add
