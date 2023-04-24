import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import useTranslation from 'next-translate/useTranslation';

import firebase from 'firebase/app';
import 'firebase/auth';
import { auth } from '../firebase.js';
import { getExchangeRate } from '../lib/exchangeRatesAPI.js';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);
    const [user, setUser] = useState(null);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [exchangeRate, setExchangeRate] = useState(null);

    //! For USD exchange rate of TRY    
    useEffect(() => {
      const fetchExchangeRate = async () => {
        const rate = await getExchangeRate(1, 'USD', 'TRY');
        setExchangeRate(rate); // 19,40
      };
      fetchExchangeRate();
    }, []); 

    //! For translation
    const { t } = useTranslation();

    //! For localStorage GET
    useEffect(() => {
      const localCartItems = window.localStorage.getItem('cartItems');
      if ( localCartItems !== null ) setCartItems(JSON.parse(localCartItems))
      
      const localShowCart = window.localStorage.getItem('showCart');
      if ( localShowCart !== null ) setShowCart(JSON.parse(localShowCart))
      
      const localTotalPrice = window.localStorage.getItem('totalPrice');
      if ( localTotalPrice !== null ) setTotalPrice(JSON.parse(localTotalPrice))
      
      const localTotalQuantities = window.localStorage.getItem('totalQuantities');
      if ( localTotalQuantities !== null ) setTotalQuantities(JSON.parse(localTotalQuantities))
      
      const localQty = window.localStorage.getItem('qty');
      if ( localQty !== null ) setQty(JSON.parse(localQty))
      
      const localUser = window.localStorage.getItem('user');
      if ( localUser !== null ) setUser(JSON.parse(localUser))
      }, [])
    //! For localStorage SET
    useEffect(() => {
      window.localStorage.setItem('cartItems', JSON.stringify(cartItems))
      window.localStorage.setItem('showCart', JSON.stringify(showCart))
      window.localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
      window.localStorage.setItem('totalQuantities', JSON.stringify(totalQuantities))
      window.localStorage.setItem('qty', JSON.stringify(qty))
      window.localStorage.setItem('user', JSON.stringify(user))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartItems])    
    
    //! This function is used when -Add to Cart- button is clicked
    const onAdd = (product, quantity) => {
        // Check if the clicked item is in the cart
        const checkProductInCart = cartItems.find((item) => item && item._id === product._id);
        // Calculate total price and quantity
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity )
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity )

        if(checkProductInCart){
          const updatedCardItems = cartItems.map((cardProduct) => {
            if(cardProduct && cardProduct._id === product._id) {
              return {
                ...cardProduct,
                quantity: cardProduct.quantity + quantity
              }
            }
            return cardProduct;
          });
          setCartItems(updatedCardItems);
        } else {
          product.quantity = quantity;
            setCartItems([ ...cartItems, { ...product } ])
        }
        toast.success(t('common:add_to_cart_notification', {quantity: qty, productName: product.name} ))

    }

    //! This function is used when delete button of a product (in cart) is clicked
    const onRemove = (product) => {
        let foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }

    //! This function is used when qty buttons of a product (in cart) is clicked
    const toggleCartItemQuanitity = (id, value) => {
        // find the clicked product and its index
        const foundProduct = cartItems.find((item) => item._id === id);
        const index = cartItems.findIndex((product) => product._id === id);
      
        // create a new array of cartItems, without modifying the original array
        const newCartItems = cartItems.slice();
        
        // update the quantity of the clicked product in the new array
        if (value === 'inc') {
          newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity + 1 };
        } else if (value === 'dec' && foundProduct.quantity > 1) {
          newCartItems[index] = { ...foundProduct, quantity: foundProduct.quantity - 1 };
        }
      
        // update the state with the new cartItems array
        setCartItems(newCartItems);
        setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price * (newCartItems[index].quantity - foundProduct.quantity));
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + (newCartItems[index].quantity - foundProduct.quantity));
      };

    //! This function is used when inc-qty button (in product detail page) is clicked
    const incQty = () => {
        setQty((prevQty) => prevQty + 1)
    }
    //! This function is used when dec-qty button (in product detail page) is clicked
    const decQty = () => {
        // fancy way to ensure that the quantity is always at least 1
        setQty((prevQty) => Math.max(prevQty - 1, 1));
    }

    //! This function is used when Buy Now button (in product detail page) is clicked
    const buyNow = (product, quantity) => {
      onAdd(product, quantity)
      setShowCart(true)
    }    
    //! This function is used to toggle visibility of login dropdown menu
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
    //! This function is used to login
    const handleLogin = async () => {
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      try {
        const result = await auth.signInWithPopup(googleAuthProvider);
        if (result.user) {
          await result.user.updateProfile({
            displayName: result.user.displayName || result.user.email,
          });
          setUser(result.user);
          setDropdownVisible(false);
        }
      } catch (error) {
        console.error(error);
      }
    }
    //! This function is used to logout
    const handleLogout = () => {
      auth.signOut();
      setDropdownVisible(false);
      setUser(null)
    };

    return (
        <Context.Provider value={{
            showCart,
            setShowCart,
            cartItems,
            setCartItems,
            totalPrice,
            setTotalPrice,
            totalQuantities,
            setTotalQuantities,
            qty,
            incQty, 
            decQty,
            onAdd,
            buyNow,
            toggleCartItemQuanitity,
            onRemove,
            handleLogin,
            handleLogout,
            user,
            setUser,
            toggleDropdown,
            dropdownVisible,
            setDropdownVisible,
            exchangeRate,
            setExchangeRate,
          }}
        >
          {children}
        </Context.Provider>
    )
}
// This is gonna allow us to use our states essentially like a hook
export const useStateContext = () => useContext(Context);