import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import RegisterForm from '../components/RegisterForm';

export default class Register extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textName} >KidsKorner</Text>
        <Text style={styles.textWelcome} >Welcome to My App!</Text>

        <RegisterForm />

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <Text style={styles.SignupTextButton}>Login</Text>
        </View>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#607d8b',
    marginVertical: 100,
  },
  textName: {
    flexGrow: 1,
    fontSize: 50,
    fontWeight: 'bold',
  },
  textWelcome: {
    flexGrow: 1,
    fontSize: 20,
  },
  signupContainer: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row'
    // marginVertical: 16,
  },
  signupText: {
    color: 'rgba(0, 0, 0, .8)',
    fontSize: 16
  },
  SignupTextButton: {
    color: 'rgba(255, 255, 255, .8)',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
