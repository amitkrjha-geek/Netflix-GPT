import { onAuthStateChanged ,signOut} from 'firebase/auth';
import React, { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';




const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
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
      <img
        className="w-44"
        src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
        alt="logo"
      />
      {user && (
        <div>
      <img
        className="hidden md:block w-12 h-12"
        alt="usericon"
        src={user?.photoURL}
      />
      <button onClick={handleSignOut} className="font-bold text-white ">
        Sign Out
          </button>
          </div>
      )}
    </div>
  


  );
}

export default Header