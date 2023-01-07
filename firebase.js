// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoDswKEA9i1l54U8sGScSDYPYjbugvhsE",
  authDomain: "mad-db-91771.firebaseapp.com",
  databaseURL: "https://mad-db-91771-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mad-db-91771",
  storageBucket: "mad-db-91771.appspot.com",
  messagingSenderId: "770430801342",
  appId: "1:770430801342:web:106ebe8be3fccd6bf795ef",
  measurementId: "G-CBTSVJWYW8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)