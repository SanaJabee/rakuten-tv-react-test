import { FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR } from './moviesAction';

const initialState = {
    loading: false,
    movie: [],
    error: null
}

export function movieReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                loading: false,
                movie: action.movie
            }
        case FETCH_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

