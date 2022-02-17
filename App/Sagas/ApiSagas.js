import {
    all,
    call,
    put,
    retry,
    select,
} from 'redux-saga/effects'
import qs from 'querystringify'
import AppActions, { AppSelectors } from '../Redux/AppRedux'

const selectAccessToken = AppSelectors.getAccessToken

function* getHeader() {
    const headers = {
        'charset': 'utf-8'
    }
    const accessToken = yield call(selectAccessToken)
    if (accessToken) {
        headers['Authorization'] = `Bearer ${accessToken}`
    }
    return headers
}

function* onError(response, action) {
    if (response.status == 401 || response.status == 403) {
        yield put(AppActions.signOut())
        yield put(action)
    } else if (response.status == 503) {
    } else if (action) {
        yield put(action)
    }
}

function* callApi(apiRequest, params, headers) {
    const response = yield call(apiRequest, params, headers)
    if (response.status == 500 || response.status == 504) {
        throw response
    }
    return response
}

function* retrySaga(apiRequest, params, headers) {
    try {
        return yield retry(3, 0, callApi, apiRequest, params, headers)
    } catch (response) {
        return response
    }
}

export function* login(api, action) {
    const { username, password } = action
    yield put(AppActions.loginSuccess())
}

export function* getUsers(api) {
    const response = yield call(retrySaga, api.getUsers)
    console.log('users res**', response)
    if (response.ok && response.data) {
        yield put(AppActions.getUsersSuccess(response.data))
    } else {
        yield call(onError, response, AppActions.getUsersFailure())
    }
}

export function* logOut(api) {
    yield put(AppActions.signOutSuccess())
}




