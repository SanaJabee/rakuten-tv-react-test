import { combineReducers } from 'redux';
import { listsReducer } from '../src/lists/listsReducer';
import { movieReducer } from '../src/movies/moviesReducer';
import { trailerReducer } from '../src/trailers/trailersReducer';

export const rootReducer = combineReducers({
    listsReducer,
    movieReducer,
    trailerReducer
});

export default rootReducer;
