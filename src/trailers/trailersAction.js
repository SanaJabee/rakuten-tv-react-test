export const FETCH_TRAILER_SUCCESS = 'FETCH_TRAILER_SUCCESS';
export const FETCH_TRAILER_ERROR = 'FETCH_TRAILER_ERROR';
export const FETCH_TRAILER = 'FETCH_TRAILER';



export const fetchTrailerAction = (id) => ({
    type: FETCH_TRAILER,
    id

});


export const fetchTrailerSuccess = (trailer) => ({
    type: FETCH_TRAILER_SUCCESS,
    trailer: trailer,
    loading: false
});

export const fetchTrailerError = (error) => ({
    type: FETCH_TRAILER_ERROR,
    error: error
});