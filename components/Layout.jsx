import Head from 'next/head';
import React from 'react';
import { Footer, Header } from './';
import { useStateContext } from '../context/StateContext';


const Layout = ({ children }) => {
  const { user, handleLogin, handleLogout } = useStateContext()
  
  
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [user, setUser] = useState(null);
  // const [wishlist, setWishlist] = useState([]);

  // const handleLogin = (user) => {
  //   setIsLoggedIn(true);
  //   setUser(user);
  //   // Fetch user's wishlist from your backend
  //   const wishlistItems = [
  //     { id: 1, name: "Product 1" },
  //     { id: 2, name: "Product 2" },
  //     { id: 3, name: "Product 3" },
  //   ];
  //   setWishlist(wishlistItems);
  // };

  return (
    <div className="layout">
      <Head>
        <title>Koral Store</title>        
      </Head>

      <header>
        <Header user={user} handleLogin={handleLogin} handleLogout={handleLogout} />
      </header>

      <main className="main-container">
        {children}
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout