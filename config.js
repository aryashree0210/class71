import  firebase from 'firebase'
require('@firebase/firestore')




var firebaseConfig = {
    apiKey: "AIzaSyChihyjFbTAeTBiciE-pOHSbHCeaiEVvTg",
    authDomain: "wily-app-e89b7.firebaseapp.com",
    databaseURL: "https://wily-app-e89b7-default-rtdb.firebaseio.com",
    projectId: "wily-app-e89b7",
    storageBucket: "wily-app-e89b7.appspot.com",
    messagingSenderId: "748133591368",
    appId: "1:748133591368:web:1ab4193be08c8004572b7d"
  };

if(!firebase.apps.length)
{
  firebase.initializeApp(firebaseConfig);
}
  export default firebase.firestore();