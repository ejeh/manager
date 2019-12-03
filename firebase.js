import firebase from "firebase";

const config = {
    apiKey: "AIzaSyDmv2_a38Lq0JraRVPVptcUf6gOpN3tWk0",
    authDomain: "manager-a955a.firebaseapp.com",
    databaseURL: "https://manager-a955a.firebaseio.com",
    projectId: "manager-a955a",
    storageBucket: "manager-a955a.appspot.com",
    messagingSenderId: "960950389454",
    appId: "1:960950389454:web:35e4619186a5bd6a589e9f"
}
const firebaseApp = firebase.initializeApp(config)

export default firebaseApp