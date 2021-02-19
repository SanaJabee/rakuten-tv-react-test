import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { FETCH_TRAILER, fetchTrailerSuccess, fetchTrailerError } from './trailersAction';
import { fetchTrailerData } from '../api/trailerApi';
function* fetchTrailer(action) {
    const id = action.id;
    try {
        const data = yield call(fetchTrailerData,id);
        yield put(fetchTrailerSuccess(data));
    } catch (err) {
        yield put(fetchTrailerError(err));
    }

}


function* trailerSaga() {
    yield all([
        takeLatest(FETCH_TRAILER, fetchTrailer),
    ]);
}

export { trailerSaga };