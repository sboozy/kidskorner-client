import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Route from './src/Router';

import Login from './src/pages/Login';
import Register from './src/pages/Register';



const BASE_URL = "https://kidskorner-api.herokuapp.com"

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>

         <StatusBar barStyle="dark-content"/>
         <Login />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#607d8b',
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
  //   // fetch(`${BASE_URL}/users`)
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
