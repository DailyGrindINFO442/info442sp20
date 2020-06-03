import firebase from 'firebase/app';
import { storeEvent } from './FirebaseController';

// Pre-Conditions: User must have entered email & password
// Post-Conditions: Successfully log user into their account, 
// send error that login information was incorrect, or that
// information does not match format need
export function signIn(email, password) {
    firebase.auth().signInWithCredential(email, password)
        .catch((err) => {
            return err.message
        })
}


// Pre-Conditions: User must have entered email and password
// Post-Conditions: Successfully creates user account with given
// information or sends error for incomplete form
export function signUp(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            var user = firebase.auth().currentUser

            let userObject = {
                email: user.email,
                uid: user.uid.toString()
            }

            storeEvent(userObject, "users/" + user.uid.toString())
            return userObject
        }).catch((err) => {
            console.log(err.message)
            return err.message
        })
}

