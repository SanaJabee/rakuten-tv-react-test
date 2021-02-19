export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_LIST_ERROR = 'FETCH_LIST_ERROR';
export const FETCH_LISTS = 'FETCH_LISTS';
export const RESET_LIST = 'RESET_LIST';

export const resetListsAction = () => ({
    type: RESET_LIST,
});

export const fetchListsAction = (id) => ({
    type: FETCH_LISTS,
    id
});


export const fetchListsSuccess = (list) => ({
    loading: false,
    type: FETCH_LIST_SUCCESS,
    list: list
});

export const fetchListsError = (error) => ({
    type: FETCH_LIST_ERROR,
    error: error
});