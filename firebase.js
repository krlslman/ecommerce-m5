
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey:             process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain:         process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId:          process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket:      process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId:  process.env.NEXT_PUBLIC_FIREBASE_MESSAGINGSENDER,
  appId:              process.env.NEXT_PUBLIC_FIREBASE_APPID
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
