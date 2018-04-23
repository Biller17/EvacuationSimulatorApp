import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, Picker} from 'react-native';
import {Actions} from "react-native-router-flux";
export default class LoginForm extends Component{


  login(){
    console.warn("inicio de simuleishon");
    // Actions.nav()
  }
  //  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
  render() {
    return(
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />

        <TextInput
          placeholder="Magnitud de sismo"
          placeholderTextColor="rgba(255,255,255,0.7)"
          //Control de botones una ves se complete el campo
          returnKeyType="next"
          onSubmitEditing={()=>this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Edificio"
          placeholderTextColor="rgba(255,255,255,0.7)"
          //Control de botones una ves se complete el campo
          returnKeyType="next"
          onSubmitEditing={()=>this.passwordInput.focus()}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
        />
        <TextInput
          placeholder="Piso"
          placeholderTextColor="rgba(255,255,255,0.7)"
          secureTextEntry
          //Control de botones una ves se complete el campo
          returnKeyType="go"
          style={styles.input}
          ref={(input)=> this.passwordInput = input}
        />
        <Picker
          selectedValue={"hola"}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>

      <TouchableOpacity onPress={()=>{this.login()}}style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Iniciar simulación</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  input:{
    height:40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 10
  },
  buttonText:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  },
  title:{
    flex:1,
    color:'#FFF',
    fontSize: 50,
    marginTop: 15,
    textAlign: 'center',
    opacity: 0.8
  }
});
