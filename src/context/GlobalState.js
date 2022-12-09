// state is a collection of things. 
// like, initial state has watchlist, and watched list in it. 

import React, { startTransition } from "react";
import {createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')): [],  
    // this means if watchlist is not empty in the local storage, use that, or else this -> []
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')): [],  
    // ^  this is basically for using local storge data in our initial state 
};


// create context 
export const GlobalContext = createContext(initialState);
// this is basically creating a global context out of an initial state.


// --------------------------------------------------------------------------------------------------------------------------------------------



// provider context
export const GlobalProvider = props =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // ^ didn't understand this part.

    useEffect(() => {
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist))
        // this is basically setting the local storage (watchlist) whenever, the state changes.. 
        localStorage.setItem('watched',JSON.stringify(state.watched))
        // this is basically setting the local storage (watched list) whenever, the state changes.. 

    }, [state]);
    // whenever state changes, this would change. But, which state?

    // actions
    const addMovieToWatchlist = movie=>{
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
        // action: ADD_MOVIE_TO_WATCHLIST, payload :movie
        // and this basically takes values from AppReducer.js
    };

    const removeMovieFromWatchlist = (id) => {
        dispatch({type: "REMOVE_FROM_WATCHLIST", payload: id});
    };
    
    const addMovieToWatched = (movie) =>{
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
    };

    const moveToWatchlist = (movie) =>{
        dispatch({type: "MOVE_TO_WATCHLIST", payload: movie});
    };

    const removeFromWatched = (id) =>{
        dispatch({type: "REMOVE_FROM_WATCHED", payload: id});
    };

    return (
        <GlobalContext.Provider 
        value = 
        {{
            watchlist: state.watchlist, 
            watched: state.watched, 
            addMovieToWatchlist,
            removeMovieFromWatchlist,
            addMovieToWatched,
            moveToWatchlist,
            removeFromWatched
        
        }}>
            {props.children}
        </GlobalContext.Provider>
    );

}