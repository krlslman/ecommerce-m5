
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAXtUWtqqcIjP6X3GbaafSGvGKszn00YI",
  authDomain: "ecommerce-m5.firebaseapp.com",
  projectId: "ecommerce-m5",
  storageBucket: "ecommerce-m5.appspot.com",
  messagingSenderId: "858602165000",
  appId: "1:858602165000:web:8f205559007dfa467552bd",
  measurementId: "G-HLJKQT9599"
};

// Check if there is already a Firebase app instance
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

export const auth = firebase.auth();
export default firebase;

// Listen for changes in the authentication state
auth.onAuthStateChanged(user => {
    if (user) {
      // User is signed in
      console.log(`User ${user.displayName} is signed in`);
    } else {
      // User is signed out
      console.log('User is signed out');
    }
  });
