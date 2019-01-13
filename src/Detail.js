import React from 'react'
import { StyleSheet, Platform, Image, Text, View } from 'react-native'
//import firebase from 'react-native-firebase'
import * as firebase from 'react-native-firebase';
export default class Main1 extends React.Component {
  static navigationOptions = {
    title: 'User Details',
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
          Hi uid={currentUser && currentUser.uid}!
        </Text>
        <Text>
          Hi email={currentUser && currentUser.email}!
        </Text>
        <Text>
          Hi displayName={currentUser && currentUser.displayName}!
        </Text>
        <Text>
          Hi emailVerified={currentUser && currentUser.emailVerified}!
        </Text>
        <Text>
          Hi photoURL={currentUser && currentUser.photoURL}!
        </Text>
        <Text>
          Hi phoneNumber={currentUser && currentUser.phoneNumber}!
        </Text>
        <Text>
          Hi providerId={currentUser && currentUser.providerId}!
        </Text>
        <Text>
          Hi metadata.creationTime={currentUser && currentUser.metadata.creationTime}!
        </Text>
        <Text>
          Hi metadata.lastSignInTime={currentUser && currentUser.metadata.lastSignInTime}!
        </Text>
        <Text>
          Hi providerData.providerId={currentUser && currentUser.providerData[0].providerId}!
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

//key: '',
      //ime: '',
      //email: '',
      //photoUrl: '',
      //emailVerified: null, 

      /* this.setState(
      ime=  this.state.currentUser.displayName,      
      photoUrl=  this.state.currentUser.photoURL,
      emailVerified=  this.state.currentUser.emailVerified,
      key =  this.state.currentUser.uid,
      //email=  this.state.currentUser.email,
    ); */