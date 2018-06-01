import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';


import Login from './pages/Login';
import Register from './pages/Register';


export default class Route extends React.Component {
  render() {
    return(
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="register" component={Register} title="Register"/>
        </Stack>
      </Router>
      )
  }
}
