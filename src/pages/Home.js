import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

const BASE_URL = "https://kidskorner-api.herokuapp.com"

export default class Home extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    // this.fetchUsers = this.fetchUsers.bind(this)
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
      <View>
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

        // <Image style={styles.image}
        //        source={{uri: {'https://i.imgur.com/Tuw6wye.jpg'}}} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    flexGrow: 1,
    alignItems: 'center'
  },
  image: {
    // resizeMode: 'contain',
    width: '100%',
    height: 200
  },
  name: {
    flexGrow: 1,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    flexGrow: 1,
    alignItems: 'center'
  }

})
