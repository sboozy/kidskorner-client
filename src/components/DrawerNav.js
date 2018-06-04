import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Home from '../pages/Home';
import Create from '../pages/Create';
import { DrawerNavigator } from 'react-navigation';

const DrawerNav = new DrawerNavigator({
  Home:   { screen: Home,
            navigationOptions: ({ navigation }) => ({
              title: 'See All Items',  // Title in side bar
            })
          },
  Create: { screen: Create,
              navigationOptions: ({ navigation }) => ({
              title: 'Post an Item', // Title in side bar
            })
          }
        })

export default DrawerNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
