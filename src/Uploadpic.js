import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
import firebase from 'react-native-firebase'
//import * as firebase from 'react-native-firebase';

export default class Upload extends React.Component {
  static navigationOptions = {
    title: 'Upload Picture',
  };  
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
    console.log(currentUser.toJSON());
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>
        Upload picture!
        </Text>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

