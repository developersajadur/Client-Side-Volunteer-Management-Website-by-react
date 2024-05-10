// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsPS-RBcRlVfA5VMUBPeZxY-ftZg6rg0k",
  authDomain: "volunteerhub-dce70.firebaseapp.com",
  projectId: "volunteerhub-dce70",
  storageBucket: "volunteerhub-dce70.appspot.com",
  messagingSenderId: "902755751227",
  appId: "1:902755751227:web:626430af3ec4c5bbf5931e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;