import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

const BASE_URL = "https://kidskorner-api.herokuapp.com"

export default class Create extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        name: '',
        description: '',
        price: '',
        image_url: null
      }
      this.addProduct = this.addProduct.bind(this);
  }

  addProduct() {
    const name = this.state;
    const description = this.state;
    const price = this.state;

    fetch(`${BASE_URL}/products`, {
        method: 'POST',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          description: description,
          price: price,
          image_url: ''
        }),
      })
      .then(resp =>{
        return resp.json()
      })
      .then(resp =>{
      console.log('create response is...', resp)
      })
      .catch(err=>{
        console.log(err);
    })
  }

  render() {
    console.log(this.state)
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.labels}>
            Item you are selling:
          </Text>
          <TextInput style={styles.inputBox}
                     selectionColor="#ffffff"
                     onSubmitEditing={() => this.description.focus()}
                     onChangeText={name => this.setState({name})}
                     />
        </View>
        <View style={styles.description}>
          <Text style={styles.labels}>
            Description of item{"\n"}(please include current{"\n"}condition of item):
          </Text>
          <TextInput style={styles.inputBoxMultiLine}
                     multiline='true'
                     selectionColor="#ffffff"
                     ref={input => this.description = input}
                     onSubmitEditing={() => this.price.focus()}
                     onChangeText={description => this.setState({description})}
                     />
        </View>
        <View style={styles.price}>
          <Text style={styles.labels}>
            Price ($):
          </Text>
          <TextInput style={styles.inputBox}
                     selectionColor="#ffffff"
                     ref={input => this.price = input}
                     onChangeText={price => this.setState({price})}
                     />
        </View>
          <TouchableHighlight style={styles.postButton}>
            <Text style={styles.postText}
                  onPress={this.addProduct}
                  >Post Item
            </Text>
          </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#607d8b',
  },
  item: {
    height: 100,
  },
  description: {
    height: 250,
    marginTop: 10,
  },
  price: {
    height: 100,
    marginTop: 10,
  },
  labels: {
    flexGrow: 1,
    alignSelf: 'flex-start',
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 20
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(142, 172, 187, .7)',
    borderRadius: 15,
    color: '#ffffff',
    padding: 12,
    fontSize: 24,
    alignSelf: 'flex-start',
    // marginLeft: 20,
  },
  inputBoxMultiLine: {
    width: 300,
    height: 150,
    backgroundColor: 'rgba(142, 172, 187, .7)',
    borderRadius: 15,
    color: '#ffffff',
    padding: 12,
    fontSize: 24,
    alignSelf: 'flex-start',
    // marginLeft: 20,
  },
  postText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },
  postButton: {
    width: 200,
    backgroundColor: '#34515e',
    borderRadius: 25,
    padding: 12,
    marginTop: 20,
  }
})
