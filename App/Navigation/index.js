import {
  CreateNearAccount,
  Dashboard,
  GiftanNFT,
  Login,
} from '../Containers';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import { navigationRef } from './rootNavigation';

const Stack = createNativeStackNavigator();

const AppNavigation = ({ signedIn }) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateNearAccount" component={CreateNearAccount} />
        <Stack.Screen name="GiftanNFT" component={GiftanNFT} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => ({
  signedIn: state.app.signedIn,
})

export default connect(mapStateToProps, null)(AppNavigation)