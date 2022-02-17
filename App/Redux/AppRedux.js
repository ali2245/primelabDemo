import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { isDark } from '../Utils/common'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    rehydrationComplete: null,
    login: ['username', 'password'],
    loginSuccess: ['loginSuccess'],
    loginFailure: ['errorMessage'],
    getUsers: null,
    getUsersSuccess: ['data'],
    getUsersFailure: null,
    updateAppState: ['appState'],
    signOut: null,
    signOutSuccess: null,
    enterBackground: null,
    updateColorScheme: ['scheme'],
    manuallyChanged: ['manuallyChanged'],
})

export const AppTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    loginSuccess: null,
    rehydrated: false,
    signedIn: false,
    isLoading: false,
    access_token: null,
    colorScheme: isDark() ?? 'light',
    isManuallyChangeScheme: false,
    errorMessage: null,
    users: []
})

/* ------------- Selectors ------------- */

export const AppSelectors = {
    isSignedIn: state => state.app.signedIn,
    getAccessToken: state => state.app.access_token,
}

/* ------------- Reducers ------------- */

export const rehydrationComplete = (state) =>
    state.merge({ rehydrated: true })

export const login = (state) =>
    state.merge({ isLoading: true, loginSuccess: null })

export const loginSuccess = (state, { loginSuccess }) =>
    state.merge({ signedIn: true, isLoading: false, loginSuccess: true })

export const loginFailure = (state, { errorMessage }) =>
    state.merge({ signedIn: false, isLoading: false, loginSuccess: false, errorMessage })

export const getUsers = (state) =>
    state.merge({ isLoading: true })

export const getUsersSuccess = (state, { data }) =>
    state.merge({ isLoading: false, users: data })

export const getUsersFailure = (state) =>
    state.merge({ signedIn: false, })

export const updateAppState = (state, { appState }) => {
    if (appState == 'inactive' || appState == 'background') {
        return state.merge({ appState })
    } else {
        return state.merge({ appState })
    }
}
export const signOutSuccess = (state) =>
    state.merge({ signedIn: false, access_token: null, isLoading: false })

export const enterBackground = (state) =>
    state.merge({})

export const updateColorScheme = (state, { scheme }) =>
    state.merge({ colorScheme: scheme })

export const manuallyChanged = (state, { manuallyChanged }) =>
    state.merge({ isManuallyChangeScheme: manuallyChanged })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.REHYDRATION_COMPLETE]: rehydrationComplete,
    [Types.LOGIN]: login,
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGIN_FAILURE]: loginFailure,
    [Types.GET_USERS]: getUsers,
    [Types.GET_USERS_SUCCESS]: getUsersSuccess,
    [Types.GET_USERS_FAILURE]: getUsersFailure,
    [Types.UPDATE_APP_STATE]: updateAppState,
    [Types.SIGN_OUT_SUCCESS]: signOutSuccess,
    [Types.ENTER_BACKGROUND]: enterBackground,
    [Types.UPDATE_COLOR_SCHEME]: updateColorScheme,
    [Types.MANUALLY_CHANGED]: manuallyChanged,
})
