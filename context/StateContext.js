import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    const onAdd = (product, quantity) => {
        console.log("istanbul :",)
        // Detect item in basket which is the same as we click to add
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity )
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity )

        if(checkProductInCart){
            const updatedCardItems = cartItems.map((cardProduct) => {
                if(cardProduct._id === product._id) return {
                    ...cardProduct,
                    quantity: cardProduct.quantity + quantity
                }
            })

            setCartItems(updatedCardItems);
            toast.success(`${qty} ${product.name} added to your cart`)

        } else {
            product.quantity = quantity;
            setCartItems([ ...cartItems, { ...product } ])
        }
    }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    const decQty = () => {
        setQty((prevQty) => {
            return prevQty - 1 < 1 ? 1 : prevQty - 1
            // if(prevQty - 1 < 1 return 1;)
        })
    }
    return (
        <Context.Provider value={{
            showCart,
          /*   setShowCart, */
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty, 
            decQty,
            onAdd,
            // toggleCartItemQuanitity,
            // onRemove,
            // setCartItems,
            // setTotalPrice,
            // setTotalQuantities 
          }}
        >
          {children}
        </Context.Provider>
    )
}
// This is gonna allow us to use our states essentially like a hook
export const useStateContext = () => useContext(Context);