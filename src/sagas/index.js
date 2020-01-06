import { all, call, takeEvery, takeLatest, delay } from "redux-saga/effects";
import user from "./user";
export default function* rootSaga() {
    yield all([call(user)]);
}
