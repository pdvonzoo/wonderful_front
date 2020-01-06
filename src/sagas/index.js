import { all, call, takeEvery, takeLatest, delay } from "redux-saga/effects";
import book from "./book";
export default function* rootSaga() {
    yield all([call(book)]);
}
