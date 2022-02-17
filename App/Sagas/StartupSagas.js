import {
    put,
    select,
} from 'redux-saga/effects'
import AppActions, { AppSelectors } from '../Redux/AppRedux'

// process STARTUP actions
export function* startup(action) {
    const isSignedIn = yield select(AppSelectors.isSignedIn)
    if (isSignedIn) {
    } else {
        yield put(AppActions.rehydrationComplete())
    }
}
