// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK05bWIrsAQJoJmXh-yAnyD0P8_mmCtlM",
  authDomain: "b9a10-paintinganddrawing.firebaseapp.com",
  projectId: "b9a10-paintinganddrawing",
  storageBucket: "b9a10-paintinganddrawing.appspot.com",
  messagingSenderId: "1087197837883",
  appId: "1:1087197837883:web:bd77842ad2f0873eaeba1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app