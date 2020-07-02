import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBi_yIifajbGfYsbhb1Dk0I4KwltIKBNy4",
    authDomain: "burger-queen-mexa.firebaseapp.com",
    databaseURL: "https://burger-queen-mexa.firebaseio.com",
    projectId: "burger-queen-mexa",
    storageBucket: "burger-queen-mexa.appspot.com",
    messagingSenderId: "457070581674",
    appId: "1:457070581674:web:a1055cbc4dbb8f73783dd3",
    measurementId: "G-Z7SRWBFN2L"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();

export {db, auth, app}
