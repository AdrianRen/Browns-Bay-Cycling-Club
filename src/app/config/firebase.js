import firebase from 'firebase';
import 'firebase/firestore';

const firebaesConfig ={
  apiKey: "AIzaSyAUQU9tJZJ47lydyxFqNLS65j_qqjgpj58",
  authDomain: "bbcc-e36d2.firebaseapp.com",
  databaseURL: "https://bbcc-e36d2.firebaseio.com",
  projectId: "bbcc-e36d2",
  storageBucket: "bbcc-e36d2.appspot.com",
  messagingSenderId: "584932418479"
};

firebase.initializeApp(firebaesConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;