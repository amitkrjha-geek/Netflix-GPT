import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { loginImage, userAvatar } from '../utils/constants'


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const email = useRef(null);
    const fullName = useRef(null);
    const password = useRef(null);

    const handleButton = ()=>{
         const message = checkValidData(
           email.current.value,
           password.current.value
         );
         setErrorMessage(message);
         if (message) return;

         if (!isSignInForm) {
           // Sign Up Logic
           createUserWithEmailAndPassword(
             auth,
             email.current.value,
             password.current.value
           )
             .then((userCredential) => {
               const user = userCredential.user;
               updateProfile(user, {
                 displayName: fullName.current.value,
                 photoURL:userAvatar,
               })
                 .then(() => {
                   const { uid, email, displayName, photoURL } =
                     auth.currentUser;
                   dispatch(
                     addUser({
                       uid: uid,
                       email: email,
                       displayName: fullName,
                       photoURL: photoURL,
                     })
                   );
                 })
                 .catch((error) => {
                   setErrorMessage(error.message);
                 });
             })
             .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setErrorMessage(errorCode + "-" + errorMessage);
             });
         } else {
           // Sign In Logic
           signInWithEmailAndPassword(
             auth,
             email.current.value,
             password.current.value
           )
             .then((userCredential) => {
               // Signed in
               const user = userCredential.user;
             })
             .catch((error) => {
               const errorCode = error.code;
               const errorMessage = error.message;
               setErrorMessage(errorCode + "-" + errorMessage);
             });
         }
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <img
        className="absolute w-full h-screen"
        src={loginImage}
        alt="background"
      />
          <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full md:w-8/12 lg:w-3/12 absolute  p-12 bg-black my-44 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
                  <input
                      ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-slate-700"
          />
        )}
              <input
                  ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-slate-700"
        />
              <input
                  ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-slate-700"
              />

              <p className='p-4 text-red-700'>{errorMessage}</p>


              <button className="p-4 my-6 bg-red-700 w-full rounded-lg"
              onClick={handleButton}
              >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered User? Sign In  now"}
        </p>
      </form>
    </div>
  );
}

export default Login