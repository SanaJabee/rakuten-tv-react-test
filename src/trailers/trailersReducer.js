import { FETCH_TRAILER, FETCH_TRAILER_SUCCESS, FETCH_TRAILER_ERROR } from './trailersAction';

const initialState = {
    loading: false,
    trailer: [],
    error: null
}

export function trailerReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRAILER:
            return {
                ...state,
                loading: true
            }
        case FETCH_TRAILER_SUCCESS:
            return {
                ...state,
                loading: false,
                trailer: action.trailer
            }
        case FETCH_TRAILER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

