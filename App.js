import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';


import Login from './src/pages/Login';
import Register from './src/pages/Register';
import DrawerNav from './src/components/DrawerNav';

export default class App extends React.Component {

  render() {
    console.disableYellowBox = true;
    return (
      <AppNavigator />
    );
  }
}

const AppNavigator = new StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  DrawerNav: {screen: DrawerNav }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});


  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     data: []
  //   }
  //   // this.fetchUsers = this.fetchUsers.bind(this)
  // }

  // fetchUsers() {
    // fetch(`${BASE_URL}/users`)
  //   fetch('https://anapioficeandfire.com/api/characters/583')
  //   .then(resp =>{
  //     return resp.json()
  //   })
  //   .then(respBody =>{
  //     this.setState({
  //       data: respBody
  //     })
  //   })
  //   .catch(err=>{
  //     console.log(err);
  //   })
  // }

  // componentDidMount(){
  //   this.fetchUsers()
  // }


        // <Text style={{color: '#ffffff', fontSize: 28}}>Welcome User</Text>
        // <Text>{JSON.stringify(this.state.data)}</Text>
