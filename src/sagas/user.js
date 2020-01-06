import {
    fork,
    all,
    takeLatest,
    takeEvery,
    put,
    delay,
    call
} from "redux-saga/effects";

import {
    SEARCH_BOOK_REQUEST,
    SEARCH_BOOK_SUCCESS,
    SEARCH_BOOK_FAILURE
} from "../modules/books";

function userLoginAPI(actionData) {
    // const result = axios.get("http://localhost:3000");
    console.log("결과  :", actionData);
}
function* search(action) {
    console.log(action.data)
    try {
        yield delay(2000);
        // yield call(userLoginAPI, action.data);
        yield put({ type: SEARCH_BOOK_SUCCESS, data: action.data });
    } catch (e) {
        yield put({ type: SEARCH_BOOK_FAILURE, error: e });
        console.error(e);
    }
}
function* watchBookSearch() {
    console.log("watchs")
    yield takeEvery(SEARCH_BOOK_REQUEST, search);
}
export default function* userSaga() {
    yield all([fork(watchBookSearch)]);
}
