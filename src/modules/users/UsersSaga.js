
import { takeEvery, takeLatest } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

// import {REQUEST_USER, addUser} from './UserState';
import {INCREMENT, set} from '@modules/example/ExampleState';
import {get} from "@utils/request"


export function* requestUser(action) {
    const user = yield call(get, "https://randomuser.me/api")
    console.log(user.results)
    yield put(set(12))
}

export default function* UserSaga() {
  yield* takeEvery(INCREMENT, requestUser);
}