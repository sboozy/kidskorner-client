import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight
} from 'react-native';
import { NavigationActions } from 'react-navigation';


const BASE_URL = "https://kidskorner-api.herokuapp.com"

export default class Home extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  fetchAllProducts() {
    fetch(`${BASE_URL}/products`)
    // fetch('https://anapioficeandfire.com/api/characters/583')
    .then(resp =>{
      return resp.json()
    })
    .then(respBody =>{
      this.setState({
        data: respBody.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  componentDidMount(){
    this.fetchAllProducts()
  }
//   render() {
//     return (
//       // {this.state.data.map(product => (
//       <View styles={styles.container}>
//       <Text>{JSON.stringify(this.state.data)}</Text>
//       </View>
//     )
//   }
// }

  render() {
    console.log('home component', this.state.data)
    // const picUrl = item.image_url;
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.menu} onPress={() => this.props.navigation.openDrawer()}>
          <Image
            style={styles.menu}
            source={require('../images/hamburger_icon.png')}
            />
        </TouchableHighlight>

        <FlatList
          data={this.state.data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatListContainer}>
            <Image style={styles.image}
                   source={{uri: `${item.image_url}`}}/>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>}
          keyExtractor={item => item.id}
        />
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
  },
  menu: {
    height: 40,
    width: 40,
    alignSelf: 'flex-end',
    marginLeft: 5
  },
  flatListContainer: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 5
  },
  image: {
    width: '100%',
    height: 200
  },
  name: {
    flexGrow: 1,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5
  },
  description: {
    flexGrow: 1,
    alignItems: 'center',
    marginTop: 5,
  }

})
