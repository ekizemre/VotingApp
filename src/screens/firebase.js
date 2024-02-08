// Import the functions you need from the SDKs you need
import *as firebase from "firebase";
import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDonFXRWPNsgHloRP6c6I4QIPK0ZsfiWi8",
    authDomain: "fir-auth-7696e.firebaseapp.com",
    projectId: "fir-auth-7696e",
    storageBucket: "fir-auth-7696e.appspot.com",
    messagingSenderId: "408904262158",
    appId: "1:408904262158:web:cd2d425486f5dbb6a7525f"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth();

export { auth };