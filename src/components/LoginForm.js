import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

import DrawerNav from './DrawerNav';
import { DrawerNavigator } from 'react-navigation';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
                   placeholder='Email'
                   placeholderTextColor="#ffffff" />
        <TextInput style={styles.inputBox}
                   placeholder='Password'
                   secureTextEntry={true}
                   placeholderTextColor="#ffffff" />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}
                onPress={() => this.props.navigation.navigate('DrawerNav')}>Login</Text>
        </TouchableOpacity>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(142, 172, 187, .7)',
    borderRadius: 25,
    // backgroundColor: '#8eacbb',
    padding: 12,
    fontSize: 24,
    marginVertical: 8
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  loginButton: {
    width: 300,
    backgroundColor: '#34515e',
    borderRadius: 25,
    padding: 12,
    marginVertical: 8,
  }
})
