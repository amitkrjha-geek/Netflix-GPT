import { onAuthStateChanged ,signOut} from 'firebase/auth';
import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { logo } from '../utils/constants';
import { addShowgpt } from '../utils/gptSlice';




const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const gptState = useSelector((store) => store.gpt?.showGpt);
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  const handleGpt = () => {
    dispatch(addShowgpt());
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        )
        navigate("/browse")
      }
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  },
    []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />
      {user && (
        <div className="flex flex-row p-4">
          <button onClick={handleGpt}
            className="bg-red-500 hover:bg-red-700 text-white w-44 font-bold py-2 px-4 rounded">
            {gptState?"HomePage":"Movies Gpt"}
          </button>

          {/* <img
            className="hidden md:block w-12 h-12 mx-2 my-2"
            alt="usericon"
            src={user?.photoURL}
      /> */}
          <button
            onClick={handleSignOut}
            className="font-bold  px-4 w-28 bg-white h-12 mx-2 my-2text-red"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header