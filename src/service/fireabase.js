import app from 'firebase/app';
import 'firebase/database'
import 'firebase/auth';

const firebaseConfig = {
	apiKey: "AIzaSyCqjEyAVDh7JB-cEOXqP5PoKOCwgXSK1JE",
	authDomain: "webapp-6e4a7.firebaseapp.com",
	databaseURL: "https://webapp-6e4a7.firebaseio.com",
	projectId: "webapp-6e4a7",
	storageBucket: "webapp-6e4a7.appspot.com",
	messagingSenderId: "45044170928",
	appId: "1:45044170928:web:660ac3c3a723033c10bb75",
	measurementId: "G-JEJS0SC23J"
};
class Firebase {

	constructor() {
		app.initializeApp(firebaseConfig);
	}

	handleLogin(email, password) {
		return app.auth().signInWithEmailAndPassword(email, password);
	}

	async handleStore(name, email, password) {
		await app.auth().createUserWithEmailAndPassword(email, password)

		const { uid } = app.auth().currentUser;

		return app.database().ref('users').child(uid).set({
			name
		});
	}

	isLogged(){
		return new Promise( resolve => {
			app.auth().onAuthStateChanged(resolve);
		})
	}
}

export default new Firebase();
