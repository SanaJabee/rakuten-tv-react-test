import { FETCH_LISTS, FETCH_LIST_SUCCESS, FETCH_LIST_ERROR, RESET_LIST } from './listsAction';

const initialState = {
    loading: false,
    list: [],
    error: null
}

export function listsReducer(state = initialState, action) {
    switch (action.type) {
        case RESET_LIST:
            return initialState;
        case FETCH_LISTS:
            return {
                ...state,
                loading: true
            }
        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.list
            }
        case FETCH_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

