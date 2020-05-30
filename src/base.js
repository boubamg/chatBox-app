import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4PPElfDcDl41_u3szD2TPXdJXAz8nqR4",
    authDomain: "chatbox-app-f4489.firebaseapp.com",
    databaseURL: "https://chatbox-app-f4489.firebaseio.com",
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base