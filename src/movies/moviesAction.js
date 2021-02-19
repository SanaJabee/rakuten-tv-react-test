export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR';
export const FETCH_MOVIES = 'FETCH_MOVIES';



export const fetchMovieAction = (id) => ({
    type: FETCH_MOVIES,
    id
});


export const fetchMovieSuccess = (movie) => ({
    type: FETCH_MOVIES_SUCCESS,
    movie: movie
});

export const fetchMovieError = (error) => ({
    type: FETCH_MOVIES_ERROR,
    error: error
});