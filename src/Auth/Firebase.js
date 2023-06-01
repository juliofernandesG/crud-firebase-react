import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAKszijITKvsL-ijkDxp1hrnEnWBf1Frek",
    authDomain: "crud-firebase-react-f63ff.firebaseapp.com",
    databaseURL: "https://crud-firebase-react-f63ff-default-rtdb.firebaseio.com",
    projectId: "crud-firebase-react-f63ff",
    storageBucket: "crud-firebase-react-f63ff.appspot.com",
    messagingSenderId: "152777832947",
    appId: "1:152777832947:web:a8bb7eb9e6b4f9d6847a86",
    measurementId: "G-MP1ZZXH59X"
};

// Inicialize o app do Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
