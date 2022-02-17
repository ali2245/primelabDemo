import React, { Component } from 'react';
import { Appearance, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import AppActions from '../Redux/AppRedux';

class AppearanceProvider extends Component {

    componentDidMount() {
        this.subscription = Appearance.addChangeListener(({ colorScheme }) => {
            const { isManuallyChangeScheme, updateColorScheme } = this.props;
            if (!isManuallyChangeScheme) {
                updateColorScheme(colorScheme);
            }
        });
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.remove();
        }
    }

    render() {
        const { colorScheme } = this.props;
        return <StatusBar barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'} />
    }
}

const mapStateToProps = (state) => ({
    colorScheme: state.app.colorScheme,
    isManuallyChangeScheme: state.app.isManuallyChangeScheme
})

const mapDispatchToProps = (dispatch) => ({
    updateColorScheme: (scheme) => dispatch(AppActions.updateColorScheme(scheme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppearanceProvider);