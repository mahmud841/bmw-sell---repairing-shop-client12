import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyBidGaM_H6CKij-GLfPUCGBH1Wlk-28ej8",
    authDomain: "my-car-corner.firebaseapp.com",
    projectId: "my-car-corner",
    storageBucket: "my-car-corner.appspot.com",
    messagingSenderId: "781179696195",
    appId: "1:781179696195:web:526c082e568ac908a490f6"
});

export const auth = app.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default app;