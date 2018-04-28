import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";
import LoginForm from './LoginForms';

import{Icon, Button, Container, Header, Content, Left} from 'native-base'

class usrSimulation extends Component {
  render() {
    return(
      <Container>
        <Header>
          <Left>
             <Icon name="ios-menu" onPress={() =>
              this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
        </Header>
        <Content contentContainerStyle={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#3498db'
          }}>
          <Text style={styles.title}>Simulador de evacuación</Text>
          <View style={styles.container}>
            <View style={styles.formContainer}>
              <LoginForm/>
          </View>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer:{
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    logo:{
      width: 200,
      height: 200
    },
    title:{
      flex:1,
      color:'#FFF',
      fontSize: 45,
      marginTop: 20,
      textAlign: 'center',
      opacity: 0.8
    },
    formContainer: {
      flex: 1,
    }
});

export default usrSimulation;
