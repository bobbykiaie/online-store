import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyDOC068S0IkhGLmyWmeWYOVONkjyU7yYXk",
        authDomain: "online-store-db-950e7.firebaseapp.com",
        databaseURL: "https://online-store-db-950e7.firebaseio.com",
        projectId: "online-store-db-950e7",
        storageBucket: "online-store-db-950e7.appspot.com",
        messagingSenderId: "184004616798",
        appId: "1:184004616798:web:b2a1af497ecf856724cacf",
        measurementId: "G-9Y78TT0F05"
      
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {  //userAuth is passed from App.js

    if(!userAuth) return;  // If userAuth object doesnt exist, return 

    const userRef = firestore.doc(`users/${userAuth.uid}`);  //creates ref for UID from Userauth inside firebase db
    const snapShot = await userRef.get();  //
    console.log(snapShot);

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log("error creating user", error.message)
        }

    }
    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
