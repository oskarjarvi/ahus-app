import firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
};

const base = firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
  console.log('permisson');
  return messaging.getToken();
})
.then(function(token){
  console.log(token);
})
.catch(function(error) {
  console.log('you did not gave permisson');
})
export default base;
