import React,{ Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Button } from 'react-native';
//import firebase from 'react-native-firebase';

class Loading extends React.Component {
  /* componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'SignUp')
    })
  } */
  /*  <View style={styles.container}>
        <Text>Loading</Text>
        <ActivityIndicator size="large" />
      </View>
    ) */
  
   render() {
    return (
      <View style={styles.container}>
      <Text>LOADING</Text>
      <Text>---------------------------</Text>
        <Button
            title="JUMP TO LOGIN"
            onPress={() => this.props.navigation.navigate('Login')}
        />
        <Text>---------------------------</Text>
        <Button
            title="JUMP TO SIGNUP"
            onPress={() => this.props.navigation.navigate('SignUp')}
        />
        <Text>---------------------------</Text>
        <Button
            title="JUMP TO MAIN"
            onPress={() => this.props.navigation.navigate('Main')}
        />
        <Text>---------------------------</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default Loading;