import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    showMaintenance: null,
})

export const NavigationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    isLoading: false,
    maintMode: false
})

/* ------------- Selectors ------------- */

export const NavigationSelectors = {
    guestMode: state => state.nav.guestMode,
}

/* ------------- Reducers ------------- */

export const showMaintenance = (state) =>
    state.merge({ maintMode: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SHOW_MAINTENANCE]: showMaintenance,
})
