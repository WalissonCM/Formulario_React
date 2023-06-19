import { initializeApp, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";


let app

try{
   app = getApp()
} catch (error) {
    const firebaseConfig = {
        apiKey: "AIzaSyBuYaiAo518yTWnuOmKUECId7qy8ke6RMk",
        authDomain: "veterinaria-8fe2c.firebaseapp.com",
        databaseURL: "https://veterinaria-8fe2c-default-rtdb.firebaseio.com",
        projectId: "veterinaria-8fe2c",
        storageBucket: "veterinaria-8fe2c.appspot.com",
        messagingSenderId: "234035886294",
        appId: "1:234035886294:web:4cdfae89f2e67de504f177"
    };
    
    app = initializeApp(firebaseConfig);
}

const db = getDatabase(app)

export {db}