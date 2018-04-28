import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

import {DrawerNavigator} from 'react-navigation'
import HomeScreen from './src/components/Screens/HomeScreen'
import buildingsMap from './src/components/Screens/buildingsMap'
import usrSimulation from './src/components/Screens/usrSimulation'
import realSimulation from './src/components/Screens/realSimulation'

/*import {DrawerNavigatior} from 'react-navigation'
import Login from './src/components/Login/Login'

import {Scene, Router} from 'react-native-router-flux';

export default class App extends Component<{}> {

  constructor() {
    super()
  }


  render() {
    return <Router>
      <Scene key="Root">
        <Scene key="login" component={Login} hideNavBar/>
      </Scene>
    </Router>
  }
}*/
export default class Drawer extends Component{
  render(){
    return(
      <MyApp/>
    );
  }
}

const MyApp = DrawerNavigator({
  Home:{
    screen: HomeScreen
  },
  Buildings:{
    screen: buildingsMap
  },
  UserSimulation:{
    screen: usrSimulation
  },
  RandomSimulation:{
    screen: realSimulation
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
});
