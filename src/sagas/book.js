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
    SEARCH_BOOK_FAILURE,
    GET_BOOK_TEST_SUCCESS,
    GET_BOOK_TEST_FAILURE,
    GET_BOOK_TEST_REQUEST
} from "../modules/books";
import axios from "axios";

function userLoginAPI(actionData) {
    console.log("결과  :", actionData);
}
function* search(action) {
    console.log(action.data)
    try {
        yield delay(2000);
        // yield call(userLoginAPI, action.data);
        yield put({ type: SEARCH_BOOK_SUCCESS, inputText: action.data });
    } catch (e) {
        yield put({ type: SEARCH_BOOK_FAILURE, error: e });
        console.error(e);
    }
}
function* watchBookSearch() {
    yield takeEvery(SEARCH_BOOK_REQUEST, search);
}




//------------------------------------------------------------------------------------------------------------------------


function getBookListAPI(offset = 0, limit = 3) {
    console.log(limit, offset)
    return axios.get(`http://localhost:5000/post?offset=${offset}&limit=${limit}`)
}

function* search_list(action) {
    console.log("search_list", action)
    try {
        const result = yield call(getBookListAPI, action.offset);
        console.log("result ", result)
        yield put({
            type: GET_BOOK_TEST_SUCCESS,
            data: result.data
        })
    } catch (e) {
        yield put({
            type: GET_BOOK_TEST_FAILURE,
            error: e
        })
    }


}
function* getBookList() {
    yield takeLatest(GET_BOOK_TEST_REQUEST, search_list);
}

//------------------------------------------------------------------------------------------------------------------------



export default function* userSaga() {
    yield all([fork(watchBookSearch), fork(getBookList)]);
}
