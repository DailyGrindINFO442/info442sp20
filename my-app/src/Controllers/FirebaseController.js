import firebase from 'firebase/app';

export class FirebaseController {
    constructor() {
    }

    // Pre-Conditions: Information must have been sent
    // from a controller component
    // Requires: Event, information received as an object
    //           Route, path to send information to in Firebase
    // Post-Conditions: Succesfully stores
    // received information to Firebase
    storeEvent(event, route) {
        let rootPath = firebase.database().ref(route)
        rootPath.push(event)
    }

    // Pre-Conditions: Information must be requested
    // from a controller component
    // Requires: Event, information received as an object
    // Post-Conditions: Returns requested information
    // from Firebase back to relevant controller
    sendEvent(event, route) {
        let rootPath = firebase.database().ref(route)
        
        var info

        let requestedInfo = rootPath.once("value", (snapshot) => {
            info = snapshot.val()
        })

        return info
    }
    
    // Pre-conditions: Information must be request
    // from a controller component to remove
    // Requires: Event, information received as an object
    // Post-Conditions: Returns removed event information
    // from Fireback back to relevant controller
    removeEvent(event, route) {
        let rootPath = firebase.database().ref(route)
        rootPath.remove(event)
    }
}