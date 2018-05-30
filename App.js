/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const BASE_URL = "https://kidskorner-api.herokuapp.com"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    // this.fetchUsers = this.fetchUsers.bind(this)
  }

  fetchUsers() {
    fetch(`${BASE_URL}/users`)
    // fetch('https://anapioficeandfire.com/api/characters/583')
    .then(resp =>{
      return resp.json()
    })
    .then(respBody =>{
      this.setState({
        data: respBody
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  componentDidMount(){
    this.fetchUsers()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.state.data)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009ACF',
    width: '100%',
    marginTop: 20
  },
});
