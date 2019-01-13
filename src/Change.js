import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Linking, Alert, } from 'react-native';
//import { TestComponent, PhoneButton } from './../components/AppComponents';
import * as firebase from 'react-native-firebase';
export default class Change extends React.Component {
  static navigationOptions = {
    title: 'Change User Details',
  };  

  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: "",
    };
  }

  // Occurs when signout is pressed...
  onSignoutPress = () => {
    firebase.auth().signOut();
  }

  // Reauthenticates the current user and returns a promise...
  reauthenticate = (currentPassword) => {
    var user = firebase.auth().currentUser;  
    var cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    console.log(user);
    return user.reauthenticateWithCredential(cred);
  }
  onChangeNamePress= () => {   
    var user = firebase.auth().currentUser;     
    user.updateProfile({
      displayName: "Ivek",
      photoURL: null
        }).then(function() {
      // Profile updated successfully!
      // "Bojana"
      var displayName = user.displayName;
      // "https://example.com/jane-q-user/profile.jpg"
      var photoURL = user.photoURL;
    }, function(error) {
      // An error happened.
    });  
  
  }
  // Changes user's password...
  onChangePasswordPress = () => {
    console.log(this.state.currentPassword,this.state.newPassword);
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      console.log(user);
      user.updatePassword(this.state.newPassword).then(() => {
        Alert.alert("Password was changed");
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
    
    user.updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      // Profile updated successfully!
      // "Jane Q. User"
      var displayName = user.displayName;
      // "https://example.com/jane-q-user/profile.jpg"
      var photoURL = user.photoURL;
    }, function(error) {
      // An error happened.
    });  
  
  }

  // Changes user's email...
  onChangeEmailPress = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      var user = firebase.auth().currentUser;
      console.log(user);
      user.updateEmail(this.state.newEmail).then(() => {
        Alert.alert("Email was changed");
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }
  
  render() {
    return (
      <ScrollView style={{flex: 1, flexDirection: "column", paddingVertical: 50, paddingHorizontal: 10,}}>
        <Button title="Sign out" onPress={this.onSignoutPress} />

        <TextInput style={styles.textInput} value={this.state.currentPassword}
          placeholder="Current Password" autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({currentPassword: text}) }}
        />

        <TextInput style={styles.textInput} value={this.state.newPassword}
          placeholder="New Password" autoCapitalize="none" secureTextEntry={true}
          onChangeText={(text) => { this.setState({newPassword: text}) }}
        />

        <Button title="Change Password" onPress={this.onChangePasswordPress} />

        <TextInput style={styles.textInput} value={this.state.newEmail}
          placeholder="New Email" autoCapitalize="none" keyboardType="email-address"
          onChangeText={(text) => { this.setState({newEmail: text}) }}
        />

        <Button title="Change Email" onPress={this.onChangeEmailPress} />
        <Text>------------------------</Text>

        <Button title="Change Name" onPress={this.onChangeNamePress} />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: { color: "white", fontWeight: "bold", textAlign: "center", fontSize: 20, },
  textInput: { borderWidth:1, borderColor:"gray", marginVertical: 20, padding:10, height:40, alignSelf: "stretch", fontSize: 18, },
});