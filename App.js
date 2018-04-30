import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';

import Drawer from './Drawer'
import Instructions from './src/components/Screens/Instructions'
import Aulas1 from './src/components/Screens/Aulas1'
import {Scene, Router} from 'react-native-router-flux';

export default class App extends Component<{}> {

  constructor() {
    super()
  }
  render() {
    return <Router>
      <Scene key="Root">
        <Scene key="drawer" component={Drawer} hideNavBar/>
        <Scene key="instructions" component={Instructions} hideNavBar/>
        <Scene key="aulas1" component={Aulas1} hideNavBar/>
      </Scene>
    </Router>
  }
}

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
