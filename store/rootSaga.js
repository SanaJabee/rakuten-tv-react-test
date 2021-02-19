import { all, fork } from 'redux-saga/effects';

import { ListSaga } from '../src/lists/listsSaga';
import { moviesSaga } from '../src/movies/moviesSaga';
import { trailerSaga } from '../src/trailers/trailersSaga';

export default function* root() {
    yield all(

        [fork(ListSaga), fork(moviesSaga), fork(trailerSaga)])
}