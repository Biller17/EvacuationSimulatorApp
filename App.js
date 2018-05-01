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
import Aulas2 from './src/components/Screens/Aulas2'
import Aulas3 from './src/components/Screens/Aulas3'
import EGADE from './src/components/Screens/EGADE'
import {Scene, Router} from 'react-native-router-flux';

export default class App extends Component {

  constructor() {
    super()
  }
  render() {
    return <Router>
      <Scene key="Root">
        <Scene key="drawer" component={Drawer} hideNavBar/>
        <Scene key="instructions" component={Instructions} hideNavBar/>
        <Scene key="aulas1" component={Aulas1} hideNavBar/>
        <Scene key="aulas2" component={Aulas2} hideNavBar/>
        <Scene key="aulas3" component={Aulas3} hideNavBar/>
        <Scene key="EGADE" component={EGADE} hideNavBar/>
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
