import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { FETCH_MOVIES, fetchMovieSuccess, fetchMovieError } from "./moviesAction";
import { fetchMovieData } from '../api/movieApi';
function* fetchMovies(action) {
    const id = action.id.id;
    try {
        const data = yield call(fetchMovieData,id);
        yield put(fetchMovieSuccess(data));
    } catch (err) {
        yield put(fetchMovieError(err));
    }

}


function* moviesSaga() {
    yield all([takeLatest(FETCH_MOVIES, fetchMovies)]);
}

export { moviesSaga };