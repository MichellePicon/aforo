import * as firebase from 'firebase';
import firestore from 'firebase/firestore'


const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBY54jm4u9bKO_VHfsvs4aslAUyRCds60g",
    authDomain: "conteo-52f8a.firebaseapp.com",
    databaseURL: "https://conteo-52f8a.firebaseio.com",
    projectId: "conteo-52f8a",
    storageBucket: "conteo-52f8a.appspot.com",
    messagingSenderId: "434935087016",
    appId: "1:434935087016:web:a06f4638d13afdac20279d",
    measurementId: "G-1XRS7N5D2C"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
