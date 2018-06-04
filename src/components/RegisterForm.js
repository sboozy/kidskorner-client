import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

const BASE_URL = "https://kidskorner-api.herokuapp.com"

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props)
      this.state={
      username: '',
      email:'',
      pw_hash:'',
      img_url: ''
    }
    this.registerUser = this.registerUser.bind(this);
  }

    registerUser() {
      const username = this.state;
      const email = this.state;
      const pw_hash = this.state;

      console.log('registerUser function', this.state);

      fetch(`${BASE_URL}/auth/register`, {
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          pw_hash: pw_hash,
          img_url:''
        }),
      })
      .then(resp =>{
        return resp.json()
      })
      .then(resp =>{
      console.log(resp.body)
      })
      .catch(err=>{
        console.log(err);
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.inputBox}
                   autoCapitalize='none'
                   placeholder='Username'
                   placeholderTextColor="#ffffff"
                   selectionColor="#ffffff"
                   onSubmitEditing={() => this.email.focus()}
                   onChangeText={username => this.setState({username})}
                   />
        <TextInput style={styles.inputBox}
                   autoCapitalize='none'
                   placeholder='Email'
                   placeholderTextColor="#ffffff"
                   selectionColor="#ffffff"
                   keyboardType='email-address'
                   ref={input => this.email = input}
                   onSubmitEditing={() => this.pw.focus()}
                   onChangeText={email => this.setState({email})}
                   />
        <TextInput style={styles.inputBox}
                   autoCapitalize='none'
                   placeholder='Password'
                   secureTextEntry={true}
                   placeholderTextColor="#ffffff"
                   selectionColor="#ffffff"
                   ref={input => this.pw = input}
                   onChangeText={pw_hash => this.setState({pw_hash})}
                   />
        <TouchableHighlight style={styles.registerButton}>
          <Text style={styles.registerText}
                onPress={this.registerUser} >Sign up!
          </Text>
        </TouchableHighlight>
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
    color: '#ffffff',
    padding: 12,
    fontSize: 24,
    marginVertical: 8
  },
  registerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  registerButton: {
    width: 300,
    backgroundColor: '#34515e',
    borderRadius: 25,
    padding: 12,
    marginVertical: 8,
  }
})
