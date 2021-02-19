import { call, put, takeLatest, takeEvery, all } from "redux-saga/effects";
import { fetchListsSuccess, fetchListsError, FETCH_LISTS } from "./listsAction";
import { fetchData } from '../api/listApi';
function* fetchLists() {
    try {
        const data = yield call(fetchData);
        console.log(data);
        yield put(fetchListsSuccess(data));
    } catch (err) {
        yield put(fetchListsError(err));
    }

}


function* ListSaga() {
    yield all([
        takeLatest(FETCH_LISTS, fetchLists),
    ]);
}

export { ListSaga };