import {getUsersAPI,getUsersByIdAPI,createUsersAPI,updateUsersAPI,deleteUsersAPI} from '../../api/index'
import { getUserSlice,addUserSlice, editUserSlice, deleteUserSlice } from '../slice/users'
import { setUserSlice } from '../slice/user'
import {put,takeEvery} from 'redux-saga/effects'
import { CREATE_USER, DELETE_USER_BY_ID, GET_USERS, GET_USER_BY_ID, UPDATE_USER_BY_ID } from '../types'

export function* getUsersSaga (){
    const users = yield getUsersAPI()
    yield put(getUserSlice(users.data))
}

export function* getUserByIdSaga (action){
    yield getUsersByIdAPI(action.id)
    yield put(setUserSlice(action.id))
}

export function* createUserSaga (action){
     yield createUsersAPI(action.user)
    yield put(addUserSlice(action.user))
}

export function* updateUserSaga (action){
     yield updateUsersAPI(action.user)
    yield put(editUserSlice(action.user))
}

export function* deleteUserByIdSaga (action){
     yield deleteUsersAPI(action.id)
    yield put(deleteUserSlice(action.id))
}

export function* watchUsersAsync(){
    yield takeEvery(GET_USERS,getUsersSaga)
    yield takeEvery(GET_USER_BY_ID,getUserByIdSaga)
    yield takeEvery(CREATE_USER,createUserSaga)
    yield takeEvery(UPDATE_USER_BY_ID,updateUserSaga)
    yield takeEvery(DELETE_USER_BY_ID,deleteUserByIdSaga)
}