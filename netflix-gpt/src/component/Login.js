import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);
    const email = useRef(null);
    const fullName = useRef(null);
    const password = useRef(null);

    const handleButton = ()=>{
        const message = checkValidData(email.current.value, password.current.value);
        seterrorMessage(message);
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />
          <form
              onSubmit={(e) => e.preventDefault()}
              className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
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