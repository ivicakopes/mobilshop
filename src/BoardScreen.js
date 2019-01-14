import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View, Text,Image,TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase';
import { List, ListItem, Button, icon } from 'react-native-elements';
//import firebase from '../Firebase';
//import SideMenu from 'react-native-side-menu';
//import Menu from './Menu';
//const image = require('../assets/menu.png');

class BoardScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Board Lista',
      headerRight: (
        <Button
          buttonStyle={{ padding: 0, backgroundColor: 'transparent' }}
          icon={{ name: 'add-circle', style: { marginRight: 0, fontSize: 28,color:'blue' } }}
          onPress={() => { navigation.push('AddBoard') }}
        />
      ), 
      
    };
  }; 
  
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    //this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      currentUser: null,
      isOpen: false,
      isOpenText:'false',
      selectedItem: 'About',
      isLoading: true,
      boards: []
    };
  }
  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
} 
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  /* componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  } */
  /* onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author,
      });
    });
    this.setState({
      boards,
      isLoading: false,
   });
  } */
 
  
    render() {
      const { currentUser } = this.state
  return (
        <View style={styles.container}>
          <Text>
            Pozdrav {currentUser && currentUser.email}!
          </Text>
          <Text>------------------------</Text>
          <Button
          title="User details !"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <Text>------------------------</Text>
         <Button
          icon={{name: 'cached'}}
          title="Change Email & Password !"
          onPress={() => this.props.navigation.navigate('Change')}
        /> 
        </View>
      )
    }
  } 
    //const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    /* if(this.state.isOpen){
      this.state.isOpenText = 'true';
    }else{
      this.state.isOpenText = 'false';
    }; */
    /* if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
  
    return (
      <SideMenu
      menu={menu}
      
      isOpen={this.state.isOpen}
      onChange={isOpen => this.updateMenuState(isOpen)}
    > 
      <ScrollView style={styles.container}>
      <TouchableOpacity
          onPress={this.toggle}
         // style={styles.button}
        >
          <Image
            source={image}
            style={{ width: 32, height: 32 }}
          />
          
        </TouchableOpacity>
        <List>
          {
            this.state.boards.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: 'book', type: 'font-awesome'}}
                onPress={() => {
                  this.props.navigation.navigate('BoardDetails', {
                    boardkey: `${JSON.stringify(item.key)}`,
                  });
                }}
              />
            ))
          }
        </List>
        <Button
          title="User details !"
          onPress={() => this.props.navigation.navigate('Detail')}
        /> */
        {/* <Text>------------------------</Text>
         <Button
          title="Change Email & Pass"
          onPress={() => this.props.navigation.navigate('Change')}
        /> */}
        {/* <Text>------------------------</Text>
         <Button
          title="Proba Menu"
          onPress={() => this.props.navigation.navigate('Menuproba')}
        />
        <Text>----------{this.state.isOpenText}--------------</Text> */}
        {/* <Button
          title="Upload picture"
          onPress={() => this.props.navigation.navigate('Uploadpic')}
        />
        <Text>----------{this.state.isOpenText}--------------</Text> */}
        
      //</ScrollView>
     // </SideMenu>
    //);
  //}
//}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22,
   backgroundColor: '#F5FCFF',
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  item: {
    
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default BoardScreen;
