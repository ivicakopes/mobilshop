import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,StatusBar} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Main from './Main'
import BoardScreen from './BoardScreen';
//import BoardDetailScreen from './BoardDetailScreen';
//import AddBoardScreen from './AddBoardScreen';
//import EditBoardScreen from './EditBoardScreen'; 
import Detail from './Detail';
import Change from './Change';
//import Menuproba from './Menuproba';
//import Uploadpic2 from './Uploadpic2';
//import Uploadpic from './Uploadpic';
//type Props = {};

const Apps = createSwitchNavigator(
  {
    Loading,
    SignUp,
    Login,
    Main
  },
  {
    initialRouteName: 'Loading'
  }
);
const AppStack = createStackNavigator({ 
  //Loading: Loading
  Board: BoardScreen,
  //BoardDetails: BoardDetailScreen,  
  //AddBoard: AddBoardScreen
  //EditBoard: EditBoardScreen,
  Detail: Detail,
  Change : Change,
  //Menuproba: Menuproba,
  //Uploadpic2: Uploadpic2,
  //Uploadpic: Uploadpic,
 });

export default createAppContainer(createSwitchNavigator(
  {
    Loading: Loading,
    SignUp: SignUp,
    Login: Login,
    //Main:Main
    Main: AppStack,
  },
  {
    initialRouteName: 'Loading',
  }
));
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});