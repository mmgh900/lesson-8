import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCCZv_0SC5KluGKRB6vmD1tJbX6TNuibx8",
    authDomain: "reactope.firebaseapp.com",
    projectId: "reactope",
    storageBucket: "reactope.appspot.com",
    messagingSenderId: "207759855345",
    appId: "1:207759855345:web:5b541d7428306adb756350",
    measurementId: "G-84F0QMS4WM"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const ref = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await ref.get()

    if (!snapShot.exists) {
        const {email, displayName} = userAuth;
        const createdAt = new Date();

        try {
            await ref.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('Error creating user', e.message)
        }



    }
    return ref;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
