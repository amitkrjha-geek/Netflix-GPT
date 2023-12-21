// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkYLzBb252ntxp6hOulGygY2Rppjkr4Po",
  authDomain: "netflix-gpt-dcbd5.firebaseapp.com",
  projectId: "netflix-gpt-dcbd5",
  storageBucket: "netflix-gpt-dcbd5.appspot.com",
  messagingSenderId: "39226273614",
  appId: "1:39226273614:web:def056a9dac8059b1df81f",
  measurementId: "G-Q7WD38LM4V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();