export default (state, action) => {
    switch (action.type) {

        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            };

            // const addMovieToWatchlist = movie=>{
            //     dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
            //    
            // };


        case "REMOVE_MOVE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload
                ),
            };

        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                watched: [action.payload, ...state.watched],
            };

        case "MOVE_TO_WATCHLIST":
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.id !== action.payload.id),
                watchlist: [action.payload, ...state.watchlist],
            };

        case "REMOVE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter((movie) => movie.id !== action.payload.id),
                
            };


        default:
            return state;
    }
}