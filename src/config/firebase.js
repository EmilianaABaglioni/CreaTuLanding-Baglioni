import { initializeApp } from "firebase/app";
import { products } from "../utils/data";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDXYP66AY0c4eAJql6N8gkm6qP_dNde5mM",
    authDomain: "mithra-ch-2024.firebaseapp.com",
    projectId: "mithra-ch-2024",
    storageBucket: "mithra-ch-2024.appspot.com",
    messagingSenderId: "653158840665",
    appId: "1:653158840665:web:1ae3e6bc234ae34366b448"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


//products.forEach((prod) => {
//    addDoc(collection(db, 'products'), prod)
//        .then((elem) => console.log(`se agrego ${elem.id}`))
//        .catch((error) => console.log(error))
//})