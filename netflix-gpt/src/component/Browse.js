import React from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import { useTopRatedMovie } from '../hooks/useTopRated';
import { usePopularMovies } from '../hooks/usePopularMovies';
import { useUpcoming } from '../hooks/useUpcoming';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovie();
  usePopularMovies();
  useUpcoming();
  return (
      <div>
      <Header />
      <MainContainer />
      <SecondaryContainer/>
      
    </div>
  )
}

export default Browse