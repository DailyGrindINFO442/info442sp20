import firebase from 'firebase/app';
import { FirebaseController } from './FirebaseController';

// Pre-Conditions: User must have entered email & password
// Post-Conditions: Successfully log user into their account, 
// send error that login information was incorrect, or that
// information does not match format need
export function signIn(email, password) {
    firebase.auth().signInWithCredential(email, password)
        .catch((err) => {
            this.setState({ errorMessage: err.message })
        })

}


// Pre-Conditions: User must have entered email, password, and name
// Post-Conditions: Successfully creates user account with given
// information or sends error for incomplete form
export function signUp(email, password, Fname, Lname) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let firebaseUser = userCredential.user;

            let userObject = {
                email: firebaseUser.email,
                firstName: Fname,
                lastName: Lname
            }

            let route = "users"
            FirebaseController.storeEvent(userObject, route)
        }).then(() => {
            this.setState((state) => {
                let user = {
                    ...state.user
                }
                return { user: user }
            })
        }).catch((err) => {
            this.setState({ errorMessage: err.message })
        })
}

