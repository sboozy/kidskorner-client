import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Home from '../pages/Home';
import Create from '../pages/Create';
import Messages from '../pages/Messages';
import Logout from '../components/Logout';


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
          },
  Messages: { screen: Messages,
              navigationOptions: ({ navigation }) => ({
              title: 'Messages', // Title in side bar
            })
          },
  Logout: { screen: Logout,
              navigationOptions: ({ navigation }) => ({
              title: 'Logout', // Title in side bar
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
