import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class RegisterForm extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
                   placeholder='Username'
                   placeholderTextColor="#ffffff" />
        <TextInput style={styles.inputBox}
                   placeholder='Email'
                   placeholderTextColor="#ffffff" />
        <TextInput style={styles.inputBox}
                   placeholder='Password'
                   secureTextEntry={true}
                   placeholderTextColor="#ffffff" />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Sign up!</Text>
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
