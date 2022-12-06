import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';


export const Watchlist = () => {

  const {watchlist} = useContext(GlobalContext);
  // ^ this is for accessing watchlist from global state.

  return (
    <div className='movie-page'>
      <div className='container'>
        <div className='header'>
          <h1 className='heading'> My Watchlist </h1>
        </div>

        {watchlist.length > 0 ? (
          <div className='movie-grid'>
            {
              watchlist.map((movie) => (
                <MovieCard movie = {movie} key={movie.id} type = "watchlist"/>
              ))
            }
          </div>
          ) : 
          (
            <h2 className='no-movies'>No movies to watch in the list</h2>
          )
        }


      </div>
    </div>
  );
};

export default Watchlist
