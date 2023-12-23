import React from 'react'
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { loginImage } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10" >
        <img className="h-screen object-cover w-screen" src={loginImage} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
}

export default GptSearch