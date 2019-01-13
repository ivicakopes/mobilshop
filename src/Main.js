import React from 'react';
import { StyleSheet, Platform, Image, Text, View, Button } from 'react-native';
//import firebase from 'react-native-firebase';

class Main extends React.Component {
  /* state = { currentUser: null }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
} */
/* render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
} */
render() {
  return (
    <View style={styles.container}>
    <Text>MAIN</Text>
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
          title="JUMP TO LOADING"
          onPress={() => this.props.navigation.navigate('Loading')}
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
    alignItems: 'center'
  }
})
export default Main;