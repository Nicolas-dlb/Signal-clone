// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBOolkE8_6w21u5ushv9Xg34t9oWcthflg",
	authDomain: "signal-clone-79105.firebaseapp.com",
	projectId: "signal-clone-79105",
	storageBucket: "signal-clone-79105.appspot.com",
	messagingSenderId: "236501216832",
	appId: "1:236501216832:web:335c2f81e9f5ba8fb9f9a5",
	measurementId: "G-9KMPK836WS",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
