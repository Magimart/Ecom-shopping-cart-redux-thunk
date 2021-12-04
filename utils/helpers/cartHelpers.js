
  export const getLocalState = () =>  {
    return (
      typeof window !== "undefined" && localStorage.getItem("cart") ? 
      JSON.parse(localStorage.getItem("cart")) : []
    )
  } 

  export const getLocalOrder = () =>  {
    return (
      typeof window !== "undefined" && localStorage.getItem("order") ? 
      JSON.parse(localStorage.getItem("order")) : []
    )
  } 





       export const removeShoppingCart = (id) => {

            let inCartItems = initialState.cartItems;

          console.log(" here are items found in basket______________basket______________")
          console.log(inCartItems)

         let itemsLeft = inCartItems.filter((item) => item._id !== id);
          // let itemsLeft = inCartItems.reduce((item, arr) => {
          //   console.log(item)

          //   const itemToRemove = item.find

          // });

           console.log("here is the filtered items to be removed of left________below in desktop state___________")
           console.log(itemsLeft)


            // localStorage.setItem('cart', JSON.stringify(itemsLeft))
        
            localStorage.setItem('cart', JSON.stringify(itemsLeft)) ;

                return itemsLeft;
          }