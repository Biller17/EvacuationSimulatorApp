import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForms';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView benhavior="padding" style={styles.container}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text style={styles.title}>Simulador de evacuación</Text>
            <Image
              style={styles.logo}
              source={require('../../Images/LogoTec.png')}
            />
          </View>
          <View style={styles.formContainer}>
            <LoginForm/>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer:{
      alignItems: 'center',
      flexGrow: 1,
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
    }
});
