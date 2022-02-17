import React, { Component } from 'react'
import {
    AppState,
} from 'react-native'
import { connect } from 'react-redux'
import LoadingSpinner from './LoadingSpinner'
import AppActions from '../Redux/AppRedux'

class AppStateHandler extends Component {
    componentDidMount() {
        this.unsubscribe = AppState.addEventListener('change', this._handleAppStateChange)
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe.remove()
        }
    }

    _handleAppStateChange = nextAppState => {
        if (nextAppState == 'background') {
            this.props.enterBackground()
        } else if (nextAppState == 'active') {
        }
    }

    render() {
        const { isDark, isLoading } = this.props
        if (isLoading) {
            return <LoadingSpinner isDark={isDark} />
        }
        return null
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.nav.isLoading,
    isDark: state.app.colorScheme == 'dark'
})

const mapDispatchToProps = (dispatch) => ({
    enterBackground: () => dispatch(AppActions.enterBackground()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppStateHandler)