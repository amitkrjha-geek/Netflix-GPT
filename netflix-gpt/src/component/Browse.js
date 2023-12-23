import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { useTopRatedMovie } from '../hooks/useTopRated';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useUpcoming } from '../hooks/useUpcoming';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovie();
  usePopularMovies();
  useUpcoming();
  const showGptPage = useSelector((store) => store.gpt?.showGpt);
  return (
    <div>
      <Header />
      {!showGptPage? (<>
        <MainContainer />
        <SecondaryContainer />

      </>) : (
          <GptSearch/>
      )
      }
    </div>
  );
}

export default Browse