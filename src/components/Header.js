import React, { useEffect} from "react";
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    //Unsubscribe when component unmount
    return () => unsubscribe();

  }, []);

  return (
    <div className="h-24 absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src= { LOGO }
        alt="logo"
      />
      {user && (
        <div className="flex">
          <img src={user.photoURL} alt="user logo" />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sing Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
