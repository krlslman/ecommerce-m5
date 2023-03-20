import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import product from '../sanityecommercem7/schemas/product';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    //! This function is used when -Add to Cart- button is clicked
    const onAdd = (product, quantity) => {
        // Check if the clicked item is in the cart
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
        // Calculate total price and quantity
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

    //! This function is used when delete button of a product (in cart) is clicked
    const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }

    //! This function is used when qty buttons of a product (in cart) is clicked
    const toggleCartItemQuanitity = (id, value) => {
        // foundProduct is the one you clicked +/- button in the cart
        foundProduct = cartItems.find((item) => item._id === id);
        // index of clicked product
        index = cartItems.findIndex((product) => product._id === id);
        // other products in the cart, except the product that is clicked
        const newCartItems = cartItems.filter((item) => item._id !== id)
         
        if(value == 'inc') {
            setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 } ]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
        } else if(value == 'dec') {
            if (foundProduct.quantity  > 1) {
                setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 } ]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
                setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
            }
        }
    }

    //! This function is used when inc-qty button (in product detail page) is clicked
    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    //! This function is used when dec-qty button (in product detail page) is clicked
    const decQty = () => {
        // fancy way to ensure that the quantity is always at least 1
        setQty((prevQty) => Math.max(prevQty - 1, 1));
    }
    return (
        <Context.Provider value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty, 
            decQty,
            onAdd,
            toggleCartItemQuanitity,
            onRemove,
            setCartItems,
            setTotalPrice,
            setTotalQuantities 
          }}
        >
          {children}
        </Context.Provider>
    )
}
// This is gonna allow us to use our states essentially like a hook
export const useStateContext = () => useContext(Context);