import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  Image
} from 'react-native';

import {DrawerNavigator, DrawerItems} from 'react-navigation'
import HomeScreen from './src/components/Screens/HomeScreen'

import usrSimulation from './src/components/Screens/usrSimulation'
import { Container, Content, Header, Body, Icon } from 'native-base';

export default class Drawer extends Component{
  render(){
    return(
      <MyApp/>
    );
  }
}

const CustomDrawerContentComponent = (props) =>(
  <Container>
    <Header style={{height: 150, backgroundColor: 'withe'}}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./src/Images/LogoTec.png')}
          />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props}/>
    </Content>

  </Container>
)
const MyApp = DrawerNavigator({
  Inicio:{
    screen: HomeScreen
  },
  Simulaciones:{
    screen: usrSimulation
  }
}, {
    initialRouteName:'Inicio',
    contentComponent:CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
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
  drawerImage:{
    height: 150,
    width: 150,
    borderRadius: 75
  }

});
