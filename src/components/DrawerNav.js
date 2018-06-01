import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Home from '../pages/Home';
import { DrawerNavigator } from 'react-navigation';

const DrawerNav = new DrawerNavigator({
  Home: { screen: Home },
})

export default DrawerNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
