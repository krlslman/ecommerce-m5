
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey:             process.env.FIREBASE_APIKEY,
  authDomain:         process.env.FIREBASE_AUTHDOMAIN,
  projectId:          process.env.FIREBASE_PROJECTDOMAIN,
  storageBucket:      process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId:  process.env.FIREBASE_MESSAGINGSENDER,
  appId:              process.env.FIREBASE_APPID,
  // measurementId:      process.env.FIREBASE_MESASUREMENTID
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
