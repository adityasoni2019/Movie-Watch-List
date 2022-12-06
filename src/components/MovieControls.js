import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const MovieControls = ({movie, type}) => {

    const {removeMovieFromWatchlist, addMovieToWatched,moveToWatchlist, removeFromWatched} = useContext(GlobalContext);

    return (

    <div className='inner-card-controls'>
        {
            type === 'watchlist' && (
                <>
                    <button className='ctrl-btn'
                        onClick={() => addMovieToWatched(movie)}
                    
                    >  
                        <i className='fa-fw far fa-eye'/>
                    </button>

                    <button 
                        className='ctrl-btn'
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                    >  
                        <i className='fa-fw fa fa-times'/>
                    </button>
                </>
            )}

            {
                type === 'watched' && 
                (
                    <>
                        <button className='ctrl-btn' onClick={() => moveToWatchlist(movie)}>
                            <i className='fa-fw far fa-eye-slash'/>
                        </button>
                        <button className='ctrl-btn' onClick={() => removeFromWatched(movie.id)}>
                            <i className='fa-fw fa fa-times'/>
                        </button>
                    </>
                )
            }
                
    </div>
  )
}

export default MovieControls
