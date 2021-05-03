// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCgkvFnaQCSB9n_OYBs_DZQ02i-equWrSU",
    authDomain: "weatherreport-2204c.firebaseapp.com",
    projectId: "weatherreport-2204c",
    storageBucket: "weatherreport-2204c.appspot.com",
    messagingSenderId: "327423438403",
    appId: "1:327423438403:web:f08f4a646ea0936e40eef6",
    measurementId: "G-EJJKXC0C07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db , auth};