import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "#################",
  authDomain: "#################",
  databaseURL: "#################"
}
let firebaseApp;
if (!firebase.apps.length) firebaseApp = firebase.initializeApp(config);
else firebaseApp = firebase.app();

const base = Rebase.createClass(firebaseApp.database());


export {
  firebaseApp
};

export default base;