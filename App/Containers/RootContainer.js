import React, { Component } from 'react'
import {
  StatusBar,
} from 'react-native'
import { connect } from 'react-redux'
import StartupActions from '../Redux/StartupRedux'
import AppNavigation from '../Navigation'
import ReduxPersist from '@config/ReduxPersist'
import { AppearanceProvider, AppStateHandler } from '../Components'

class RootContainer extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render() {
    return (
      <>
        <StatusBar />
        <AppNavigation />
        <AppStateHandler />
        <AppearanceProvider />
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  colorScheme: state.app.colorScheme,
})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)