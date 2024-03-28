// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVfjUrGFMSOYHIpj78dAYBsGCaAmxpleE",
    authDomain: "tiendaweb-petitservicios.firebaseapp.com",
    projectId: "tiendaweb-petitservicios",
    storageBucket: "tiendaweb-petitservicios.appspot.com",
    messagingSenderId: "296325340846",
    appId: "1:296325340846:web:6bd08c303b06ce2655573f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)