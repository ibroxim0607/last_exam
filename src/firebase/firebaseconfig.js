import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCcX0J-DwNjz44HH1oQpCLyiFmf4fOltIM",
  authDomain: "ebay-95a0f.firebaseapp.com",
  projectId: "ebay-95a0f",
  storageBucket: "ebay-95a0f.appspot.com",
  messagingSenderId: "539869409603",
  appId: "1:539869409603:web:d99b3ea2fdbe6b57a8fff6",
  measurementId: "G-LY4RPWHJZ7"
};

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}