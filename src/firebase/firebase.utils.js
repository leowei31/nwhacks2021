import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig ={
    apiKey: "AIzaSyAfUQzf-Dh99mGT_8hSW5LFnBrVHDEl_vk",
    authDomain: "menu-c0848.firebaseapp.com",
    projectId: "menu-c0848",
    storageBucket: "menu-c0848.appspot.com",
    messagingSenderId: "497977718392",
    appId: "1:497977718392:web:920fa3148daac0123d9f8d",
    measurementId: "G-VHZCMK5FWC"
  };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
        const{displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('Error creating user', error.message);
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;