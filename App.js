import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  StatusBar
} from 'react-native';


import Login from './src/pages/Login';
import Register from './src/pages/Register';
import DrawerNav from './src/components/DrawerNav';
import Create from './src/pages/Create';

const AppNav = StackNavigator({
  Login: {screen: Login},
  Register: {screen: Register},
  DrawerNav: {screen: DrawerNav,
              navigationOptions: {
                title: "Items For Sale",
                headerLeft: null  //removes back button to signin page
              }
            },
  Create: {screen: Create,
           navigationOptions: {
            title: "Post Item",
           }}
})

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;  //hides yellow deprecation errors
    return (
      <AppNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
        // <Text>{JSON.stringify(this.state.data)}</Text>
