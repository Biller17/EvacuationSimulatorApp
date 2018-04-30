import React, {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar, AlertIOS} from 'react-native';
import {Actions} from "react-native-router-flux";
export default class LoginForm extends Component{

  constructor(props){
    super(props)
    this.state = {
      time: '00:00',
      magnitude: '0.0',
      building: '0',
      floor: '0'
    }
  }

  login(){

    let building = parseInt(this.state.building, 10);
    let time = this.state.time;
    if(building < 1 || building > 4){
      AlertIOS.alert(
        'Numero de edificio invalido',
        'Por favor intenta de nuevo'
      );
    }
    let magnitude = parseFloat(this.state.magnitude, 10);
    if(magnitude == null){
      AlertIOS.alert(
        'Magnitud invalida',
        'Por favor intenta de nuevo'
      );
    }
    let floor = parseInt(this.state.floor, 10);
    if(building == 1){
      if(floor < 1 || floor > 5){
        AlertIOS.alert(
          'Piso invalido',
          'No hay piso ' + floor + ' en Aulas I'
        );
      }
    }
    else if(building == 2){
      if(floor < 0 || floor > 4){
        AlertIOS.alert(
          'Piso invalido',
          'No hay piso ' + floor + ' en Aulas II'
        );
      }
    }
    else if(building == 3){
      if(floor < 0 || floor > 4){
        AlertIOS.alert(
          'Piso invalido',
          'No hay piso ' + floor + ' en Aulas III'
        );
      }
    }
    else if(building == 4){
      if(floor < 0 || floor > 7){
        AlertIOS.alert(
          'Piso invalido',
          'No hay piso ' + floor + ' en Egade'
        );
      }
    }
    const simData = {
      building: building,
      floor: floor,
      magnitude: magnitude,
      time:time
    }
    Actions.instructions({data: simData})
  }

  randomSim(){
    Actions.instructions({data: 'random'})
  }
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Magnitud de sismo"
            placeholderTextColor="rgba(255,255,255,0.7)"
            //Control de botones una ves se complete el campo
            returnKeyType="next"
            onSubmitEditing={()=>this.passwordInput.focus()}
            onChangeText={(magnitude) => this.setState({magnitude})}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="Hora"
            placeholderTextColor="rgba(255,255,255,0.7)"
            //Control de botones una ves se complete el campo
            returnKeyType="next"
            onSubmitEditing={()=>this.passwordInput.focus()}
            onChangeText={(time) => this.setState({time})}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="# de Edificio"
            placeholderTextColor="rgba(255,255,255,0.7)"
            //Control de botones una ves se complete el campo
            returnKeyType="next"
            onChangeText={(building) => this.setState({building})}
            onSubmitEditing={()=>this.passwordInput.focus()}
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
          <TextInput
            placeholder="# de Piso"
            placeholderTextColor="rgba(255,255,255,0.7)"
            onChangeText={(floor) => this.setState({floor})}
            //Control de botones una ves se complete el campo
            returnKeyType="go"
            style={styles.input}
            ref={(input)=> this.passwordInput = input}
          />
        </View>
      <TouchableOpacity onPress={()=>{this.login()}}style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Iniciar simulación</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{this.randomSim()}}style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Iniciar simulación aleatoria</Text>
      </TouchableOpacity>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 20,
    flex: 1,
    marginBottom: 20,
  },
  input:{
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonContainer:{
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    marginBottom: 10
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
    textAlign: 'center',
    opacity: 0.8
  }
});
