import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, KeyboardAvoidingView, TouchableOpacity, AlertIOS} from 'react-native';
import {Actions} from "react-native-router-flux";
export default class Instructions extends Component {
  constructor(props){
    super(props);
    this.state = {
      index:0
    }
  }
  componentWillMount(){
    // console.warn(this.props.data);
    if(this.props.data != 'random'){
        this.simulacionDefinida(this.props.data.magnitude, this.props.data.time, this.props.data.building, this.props.data.floor );
    }
    else{
      this.simulacionProbabilistica();
    }

  }
  simulacionProbabilistica()
  {
      //se Genera una magnitud aleatoria
      var magnitud = Math.random();
      if(magnitud <= 0.687654){
          magnitud = 1
          var magText = "Magnitud menor a 3"
      }
      else if(magnitud > 0.687654 &&  magnitud <= 0.771567 ){
         magnitud = 3
          var magText = "Magnitud entre 3.0 y 3.9"
      }
      else if(magnitud > 0.771567 &&  magnitud <= 0.856879 ){
          magnitud = 4
          var magText = "Magnitud entre 4.0 y 4.9"
      }
      else if(magnitud > 0.856879 &&  magnitud <= 0.926376 ){
          magnitud = 5
          var magText = "Magnitud entre 5.0 y 5.9"
      }
      else if(magnitud > 0.926376 &&  magnitud <= 0.965654 ){
          magnitud = 6
          var magText = "Magnitud entre 6.0 y 6.9"
      }
      else if(magnitud > 0.965654 &&  magnitud <= 0.9865876 ){
          magnitud = 7
          var magText = "Magnitud entre 7.0 y 7.9"
      }
      else if(magnitud > 0.9865876 &&  magnitud <= 0.990121 ){
          magnitud = 8
          var magText = "Magnitud entre 8.0 y 8.9"
      }
      else{
          magnitud = 9
          var magText = "Magnitud entre 9.0 y 9.9"
      }

      //Hora del sismo
      var hora = Math.floor(Math.random() * 15) + 7

      //Ubicación duramte el sismo
      var aulaArray = [1,2,3,5];
      var aula = aulaArray[Math.floor(Math.random() * aulaArray.length)];
      if(aula == 1){
          var piso = Math.floor(Math.random() * 5) + 1
      }
      else if(aula == 2 || aula == 3 ){
          var piso = Math.floor(Math.random() * 5)
      }
      else{
          var piso = Math.floor(Math.random() * 8)
      }
      //Mandar a indicaciones
      this.indicaciones(magnitud, magText, hora, aula, piso)

  }
nextInstruction(){
  index = this.state.index;
  if(index < this.state.instructions.length){
    index +=1;
    this.setState({
      index: index
    });
  }
  else{
    AlertIOS.alert(
      'Fin de la simulación'
    );
    Actions.drawer();
  }
}

simulacionDefinida(magnitud, hora, aula, piso)
{
    magnitud = parseFloat(magnitud);
    hora = parseInt(hora);

    if(magnitud >= 1 && magnitud < 3){var magText = "Magnitud menor a 3"};
    if(magnitud >= 3 && magnitud < 4){var magText = "Magnitud entre 3.0 y 3.9"};
    if(magnitud >= 4 && magnitud < 5){var magText = "Magnitud entre 4.0 y 4.9"};
    if(magnitud >= 5 && magnitud < 6){var magText = "Magnitud entre 5.0 y 5.9"};
    if(magnitud >= 6 && magnitud < 7){var magText = "Magnitud entre 6.0 y 6.9"};
    if(magnitud >= 7 && magnitud < 8){var magText = "Magnitud entre 7.0 y 7.9"};
    if(magnitud >= 8 && magnitud < 9){var magText = "Magnitud entre 8.0 y 8.9"};
    if(magnitud >= 9 && magnitud < 10){var magText = "Magnitud entre 9.0 y 9.9"};

    this.indicaciones(magnitud, magText, hora, aula, piso);
}

//Función para dar las indicaciones a usuario
  indicaciones(magnitud, magText, hora, aula, piso)
  {
        // console.warn(hora);
        //DATOS
        // document.getElementById("mag").innerHTML = magText;
        var displayTime = '';
        if(hora < 12){
            var s = "am"
            displayTime = hora+" "+s;
        }
        else {
            s = "pm"
            displayTime = hora+" "+s;
        }
        let displayLocation = "Aulas "+aula+" piso "+piso;

        this.setState({
          displayTime: displayTime,
          displayLocation: displayLocation,
          displayMagnitude: magText
        });
        //magnitud que no es necesario evacuar
        if(magnitud >= 1 && magnitud < 3){
            var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
            "El sismo es muy leve, probablemente imperceptible. ",
            "No es necesaria una evacuación",
            "Si llegas a sentirlo solo manten la calma para no causar pánico"];

            // var text = "";
            // for (var i = 0; i < textArray.length; i++) {
            //      text += " ** " + textArray[i] + "<br>";
            // }
            //  document.getElementById("indicaciones").innerHTML = text;
        }
        //magnitud de 3.0 a 3.9
        else if(magnitud >= 3 && magnitud < 4){
            if(hora < 16){
                var textHora1 = "A las "+hora+s+" hay una gran cantidad de personas en el campus, por lo que evacuar causarías grandes e innecesarias aglomeraciones";
                var textHora2 = "No es necesario evacuar, quédate en tu salón o colocate en los pasillos del edificio."
            }
            else{
                var textHora1 = "A las "+hora+s+" hay pocas personas en el campus, si deseas evacuar hazlo con calma y siguiendo las indicaciones.";
                var textHora2 = "Sin embargo no es necesario evacuar, puedes quedarte en tu salón o colocarte en los pasillos del edificio."
            }
            //Aulas 1
            if(aula == 1){
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra a lado de los baños, esta salida te llevará a la parte trasera del edificio de aulas 1. ",
                    "Una vez fuera dirigete hacia el estacionamiento a tu derecha, ahí se encuentra el punto de reunion más cercano a ti. ",
                    "Segunda salida de emergencia: ",
                    "Se encuentra del lado opuesto a los baños, junto a las escaleras, esta salida te llevará a la explanda de profesional.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano"];



                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia la entrada del edificio, junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende un piso",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 4){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende dos niveles hasta llegar al piso 1",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 5){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende un piso.",
                    "En el piso 4 camina todo derecho hasta volver a topar con las escaleras de tu lado derecho.",
                    "Baja tres niveles hasta llegar al piso 1",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
            }
            //Aulas 2
            if(aula == 2){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra a lado de las escaleras, esta salida te llevará a la parte trasera del edificio de aulas 2. ",
                    "Una vez fuera dirigete hacia el estacionamiento arriba a tu derecha, ahí se encuentra el punto de reunion más cercano a ti. ",
                    "Segunda salida de emergencia: ",
                    "Se encuentra en la conexión con Aulas 3, saliendo deberías ver el stand de santander.",
                    "Una vez ahí, dirigete hacia el estacionamiento enfrente de ti ese es el punto de reunion más cercano"];



                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras en el centro del edificio y desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Las escaleras se encuentran sobre el pasillo frontal del edificio, desciende un nivel.",
                    "Una vez en en el piso 2 camina hacia el pasillo paralelo el que llegaste, ahí se encuentran las escaleras, desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 4){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Las escaleras se encuentran sobre el pasillo frontal del edificio, desciende dos nivel.",
                    "Una vez en en el piso 2 camina hacia el pasillo paralelo el que llegaste, ahí se encuentran las escaleras, desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
            }
            //Aulas 3
            if(aula == 3){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra en la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión.",
                    "Segunda salida de emergencia: ",
                    "Ésta salida está en el laboratorio que se encuentra bajando las escaleras, saliendo te encontrarás en la parte trasera del edificio. ",
                    "Una vez fuera de tu lado izquierdo se encuentra un estacionamiento, ese es el punto de reunión más cercano"];



                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja un piso.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja dos pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja tres pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 4){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja cuatro pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
            }
            ///EGADE
            if(aula == 5){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica las salidas de emergencia. ",
                    "Dirigete hacia la parte de atrás de la biblioteca, las puertas de cristal deberían estar abiertas, sal por ahí",
                    "Una vez fuera te encontrarás el punto de reunión justo enfrente, en el estacionamiento.",
                    "En caso de que las puertas se encuentren cerradas dirigete hacia las escaleras y sube un piso.",
                    "Ya en el nivel 1 sal por las puertas principales hacia la explanada de profesional"];



                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Dirigete hacia la salida principal de learning commons, saliendo te encontrarás en la explanda de profesional. ",
                    "Existe otra salida, se encuentra dentro de los salones para maestros, esta salida te llevará a un pequeño jardín.",
                    "Desde ahí puedes salir a la explanada de profesional."];

                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Salidas de emergencia:",
                    "la primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio",
                    "Las segundas se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable usar las centrales, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Baja 1 nivel",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 4){
                var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio",
                    "Las segundas se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable usar las centrales, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Desciende 2 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                   "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 5){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio",
                    "Las segundas se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable usar las centrales, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Desciende 3 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 6){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio",
                    "Las segundas se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable usar las centrales, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Desciende 4 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 7){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Sismo leve, con bajas probabilidades de causar daños. ",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Si te sientes ansioso o expuesto a algun peligro manten la calma y ubica la salida de emergencia. ",
                    "Usa las escaleras que se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable bajar un piso y seguir bajando por las escaleras centrales del piso 6, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Desciende 5 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];

                }
            }
        }
        ////////////MAGNITUD DE 4 A 7
        else if(magnitud >= 4 && magnitud < 7){
            if(hora < 16){
                var textHora1 = "A las "+hora+s+" hay una gran cantidad de personas en el campus.";
                var textHora2 = "PROCEDE CON PRECAUCIÓN E INTENTA USAR SALIDAS Y ZONAS SEGURAS DONDE HAYA MENOS GENTE."
            }
            else{
                var textHora1 = "A las "+hora+s+" hay poca gente en el campus.";
                var textHora2 = "Usa las salidas y zonas seguras más cercanas"
            }
            //Aulas 1
            if(aula == 1){
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra a lado de los baños, esta salida te llevará a la parte trasera del edificio de aulas 1. ",
                    "Una vez fuera dirigete hacia el estacionamiento a tu derecha, ahí se encuentra el punto de reunion más cercano a ti. ",
                    "Segunda salida de emergencia: ",
                    "Se encuentra del lado opuesto a los baños, junto a las escaleras, esta salida te llevará a la explanda de profesional.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano"];



                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia la entrada del edificio, junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende un piso",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 4){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende dos niveles hasta llegar al piso 1",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 5){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende un piso.",
                    "En el piso 4 camina todo derecho hasta volver a topar con las escaleras de tu lado derecho.",
                    "Baja tres niveles hasta llegar al piso 1",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
            }
            //Aulas 2
            if(aula == 2){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra a lado de las escaleras, esta salida te llevará a la parte trasera del edificio de aulas 2. ",
                    "Una vez fuera dirigete hacia el estacionamiento arriba a tu derecha, ahí se encuentra el punto de reunion más cercano a ti. ",
                    "Segunda salida de emergencia: ",
                    "Se encuentra en la conexión con Aulas 3, saliendo deberías ver el stand de santander.",
                    "Una vez ahí, dirigete hacia el estacionamiento enfrente de ti ese es el punto de reunion más cercano"];

                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras en el centro del edificio y desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Las escaleras se encuentran sobre el pasillo frontal del edificio, desciende un nivel.",
                    "Una vez en en el piso 2 camina hacia el pasillo paralelo el que llegaste, ahí se encuentran las escaleras, desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 4){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Las escaleras se encuentran sobre el pasillo frontal del edificio, desciende dos nivel.",
                    "Una vez en en el piso 2 camina hacia el pasillo paralelo el que llegaste, ahí se encuentran las escaleras, desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
            }
            if(aula == 3){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra en la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión.",
                    "Segunda salida de emergencia: ",
                    "Ésta salida está en el laboratorio que se encuentra bajando las escaleras, saliendo te encontrarás en la parte trasera del edificio. ",
                    "Una vez fuera de tu lado izquierdo se encuentra un estacionamiento, ese es el punto de reunión más cercano"];

                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja un piso.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja dos pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja tres pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 4){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja cuatro pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
            }
            if(aula == 5){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Dirigete hacia la parte de atrás de la biblioteca, las puertas de cristal deberían estar abiertas, sal por ahí",
                    "Una vez fuera te encontrarás el punto de reunión justo enfrente, en el estacionamiento.",
                    "En caso de que las puertas se encuentren cerradas dirigete hacia las escaleras y sube un piso.",
                    "Ya en el nivel 1 sal por las puertas principales hacia la explanada de profesional"];
                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Dirigete hacia la salida principal de learning commons, saliendo te encontrarás en la explanda de profesional. ",
                    "Existe otra salida, se encuentra dentro de los salones para maestros, esta salida te llevará a un pequeño jardín.",
                    "Desde ahí puedes salir a la explanada de profesional."];

                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salidas de emergencia:",
                    "la primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio",
                    "Las segundas se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable usar las centrales, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Baja 1 nivel",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 4){
                var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio",
                    "Las segundas se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable usar las centrales, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Desciende 2 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                   "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 5){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio",
                    "Las segundas se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable usar las centrales, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Desciende 3 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 6){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio",
                    "Las segundas se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable usar las centrales, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Desciende 4 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 7){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "Es necesario evacuar.",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Usa las escaleras que se encuentran enfrente de los elevadores, son de emergencia.",
                    "Siendo un sismo leve es recomendable bajar un piso y seguir bajando por las escaleras centrales del piso 6, las de emergencia pueden atascarse porque son de espacio reducido",
                    "Desciende 5 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];

                }
            }

        }
        else if(magnitud >= 7 && magnitud < 10){
            if(hora < 16){
                var textHora1 = "A las "+hora+s+" hay una gran cantidad de personas en el campus.";
                var textHora2 = "PROCEDE CON PRECAUCIÓN E INTENTA USAR SALIDAS Y ZONAS SEGURAS DONDE HAYA MENOS GENTE."
            }
            else{
                var textHora1 = "A las "+hora+s+" hay poca gente en el campus.";
                var textHora2 = "Usa las salidas y zonas seguras más cercanas"
            }
            //Aulas 1
            if(aula == 1){
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra a lado de los baños, esta salida te llevará a la parte trasera del edificio de aulas 1. ",
                    "Una vez fuera dirigete hacia el estacionamiento a tu derecha, ahí se encuentra el punto de reunion más cercano a ti. ",
                    "Segunda salida de emergencia: ",
                    "Se encuentra del lado opuesto a los baños, junto a las escaleras, esta salida te llevará a la explanda de profesional.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano"];

                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia la entrada del edificio, junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende un piso",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 4){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende dos niveles hasta llegar al piso 1",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
                if(piso == 5){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Si el movimiento es intenso quedate donde estás, parate junto a los pilares y aléjate de los vidrios y ventanas.",
                    "Espera a que el movimiento reduzca su fuerza y comienza a evacuar.",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras y desciende un piso.",
                    "En el piso 4 camina todo derecho hasta volver a topar con las escaleras de tu lado derecho.",
                    "Baja tres niveles hasta llegar al piso 1",
                    "Sal del edificio por la salida junto a la librería Porrúa, esta salida te llevará a la explanda de Aulas 1. ",
                    "Una vez ahí existen dos puntos de reunión cercanos: ",
                    "El primero es justo enfrente de la salida de Aulas 1, en caso de que haya demasiada gente sigue caminando hacia el asta bandera, al lado de ésta se encuentra el segundo punto de reunión."]


                }
            }
            //Aulas 2
            if(aula == 2){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra a lado de las escaleras, esta salida te llevará a la parte trasera del edificio de aulas 2. ",
                    "Una vez fuera dirigete hacia el estacionamiento arriba a tu derecha, ahí se encuentra el punto de reunion más cercano a ti. ",
                    "Segunda salida de emergencia: ",
                    "Se encuentra en la conexión con Aulas 3, saliendo deberías ver el stand de santander.",
                    "Una vez ahí, dirigete hacia el estacionamiento enfrente de ti ese es el punto de reunion más cercano"];

                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras en el centro del edificio y desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Si el movimiento es intenso quedate donde estás, parate junto a los pilares y aléjate de los vidrios y ventanas.",
                    "Espera a que el movimiento reduzca su fuerza y comienza a evacuar.",
                    "Salida de emergencia:",
                    "Las escaleras se encuentran sobre el pasillo frontal del edificio, desciende un nivel.",
                    "Una vez en en el piso 2 camina hacia el pasillo paralelo el que llegaste, ahí se encuentran las escaleras, desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
                if(piso == 4){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Si el movimiento es intenso quedate donde estás, parate junto a los pilares y aléjate de los vidrios y ventanas.",
                    "Espera a que el movimiento reduzca su fuerza y comienza a evacuar.",
                    "Salida de emergencia:",
                    "Las escaleras se encuentran sobre el pasillo frontal del edificio, desciende dos nivel.",
                    "Una vez en en el piso 2 camina hacia el pasillo paralelo el que llegaste, ahí se encuentran las escaleras, desciende un piso",
                    "Ya en el nivel 1 frente a las escaleras centrales, se encuentra la sala de trade room, del lado derecho se encuentra la salida, esta salida te llevará a las explanada de profesional",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano.",
                    "Segunda salida de emergencia: ",
                    "Justo del otro lado del trade room, en la conexión con Aulas 1 se encuentra la segunda salida, esta salida también te llevará a la explanada de profesional. punto de reunión.",
                    "Una vez ahí, dirigete al centro de la explanada ese es el punto de reunion más cercano."]


                }
            }
            if(aula == 3){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Primera salida de emergencia:",
                    "Se encuentra en la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión.",
                    "Segunda salida de emergencia: ",
                    "Ésta salida está en el laboratorio que se encuentra bajando las escaleras, saliendo te encontrarás en la parte trasera del edificio. ",
                    "Una vez fuera de tu lado izquierdo se encuentra un estacionamiento, ese es el punto de reunión más cercano"];

                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja un piso.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja dos pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Si el movimiento es intenso quedate donde estás, parate junto a los pilares y aléjate de los vidrios y ventanas.",
                    "Espera a que el movimiento reduzca su fuerza y comienza a evacuar.",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja tres pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
                if(piso == 4){
                   var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Si el movimiento es intenso quedate donde estás, parate junto a los pilares y aléjate de los vidrios y ventanas.",
                    "Espera a que el movimiento reduzca su fuerza y comienza a evacuar.",
                    "Salida de emergencia:",
                    "Dirigete hacia las escaleras, junto a los baños, baja cuatro pisos.",
                    "Cuando te encuentre en el piso 0 ve hacia la conexión con aulas 2, esta salida te llevará a la cafetería. ",
                    "Una vez fuera hay dos puntos de reunión cerca de tí. ",
                    "El primero está en el estacionamiento arriba a la derecha de donde te encuentras.",
                    "El segundo es saliendo a la izquierda se encuentra otro estacionamiento, ese es otro punto de reunión."]


                }
            }
            if(aula == 5){
                if(piso == 0){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Dirigete hacia la parte de atrás de la biblioteca, las puertas de cristal deberían estar abiertas, sal por ahí",
                    "Una vez fuera te encontrarás el punto de reunión justo enfrente, en el estacionamiento.",
                    "En caso de que las puertas se encuentren cerradas dirigete hacia las escaleras y sube un piso.",
                    "Ya en el nivel 1 sal por las puertas principales hacia la explanada de profesional"];
                }
                if(piso == 1){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Dirigete hacia la salida principal de learning commons, saliendo te encontrarás en la explanda de profesional. ",
                    "Existe otra salida, se encuentra dentro de los salones para maestros, esta salida te llevará a un pequeño jardín.",
                    "Desde ahí puedes salir a la explanada de profesional."];

                }
                if(piso == 2){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Salidas de emergencia:",
                    "la primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 3){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                     "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio.",
                    "No es recomendable usar estas escaleras, usalas solo en caso de no tener otra opción.",
                    "Usa preferentemente las escaleras de emergencia.",
                    "Se encuentran enfrente de los elevadores.",
                    "En caso de que esten atascadas espera en donde estas a que el movimiento reduzca su fuerza antes de proceder a evacuar.",
                    "Baja 1 nivel",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 4){
                var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio.",
                    "No es recomendable usar estas escaleras, usalas solo en caso de no tener otra opción.",
                    "Usa preferentemente las escaleras de emergencia.",
                    "Se encuentran enfrente de los elevadores.",
                    "En caso de que esten atascadas espera en donde estas a que el movimiento reduzca su fuerza antes de proceder a evacuar.",
                    "Desciende 2 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                   "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 5){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio.",
                    "No es recomendable usar estas escaleras, usalas solo en caso de no tener otra opción.",
                    "Usa preferentemente las escaleras de emergencia.",
                    "Se encuentran enfrente de los elevadores.",
                    "En caso de que esten atascadas espera en donde estas a que el movimiento reduzca su fuerza antes de proceder a evacuar.",
                    "Desciende 3 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 6){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Si el movimiento es intenso quedate donde estás, parate junto a los pilares y aléjate de los vidrios y ventanas.",
                    "Espera a que el movimiento reduzca su fuerza y comienza a evacuar.",
                    "Existen dos formas de bajar al piso 2.",
                    "La primera son las escaleras principales, al centro del edificio.",
                    "No es recomendable usar estas escaleras, usalas solo en caso de no tener otra opción.",
                    "Usa preferentemente las escaleras de emergencia.",
                    "Se encuentran enfrente de los elevadores.",
                    "Desciende 4 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];


                }
                if(piso == 7){
                    var textArray = ["Te encuentras en Aulas "+aula+" piso "+piso+".",
                    "SISMO MAYOR, ES NECESARIO EVACUAR LO ANTES POSIBLE",
                    textHora1, textHora2,
                    "Alejate de objetos que puedan caer y no uses elevador.",
                    "Ubica las salidas de emergencia. ",
                    "Si el movimiento es intenso quedate donde estás, parate junto a los pilares y aléjate de los vidrios y ventanas.",
                    "Espera a que el movimiento reduzca su fuerza y comienza a evacuar.",
                    "Usa las escaleras que se encuentran enfrente de los elevadores, son de emergencia.",
                    "En caso de que esten atascadas y el movimiento siga siendo demsaido intenso espera en el piso donde estes a que el movimiento reduzca su fuerza antes seguir evacuando.",
                    "A partir del piso 6 hay otras escaleras, al centro del edificio.",
                    "No es recomendable usar estas escaleras, usalas solo en caso de no tener otra opción",
                    "Sigue evacuando preferentemente por las escaleras de emergencia.",
                    "Desciende 5 niveles",
                    "Una vez en el piso 1 utiliza alguna de las 2 salidas de emergencia.",
                    "Salidas de emergencia:",
                    "La primera es la entrada principal que se encuentra a lado de la entrada al café cielito querido.",
                    "Saliendo te encontraras en la explanada de entrada al tec, el punto de reunión es frente del auditorio.",
                    "La segunda salida es la salida del café cielto querido, esta salida te llevará a una pequeña área de mesas.",
                    "Sigue caminando derecho, tendrás que descender unos escalones y te encontrarás frente a aulas 1."];

                }
            }
        }

        // var text = "";
        // for (var i = 0; i < textArray.length; i++) {
        //      text += " ** " + textArray[i] + "<br>";
        // }
        //  document.getElementById("indicaciones").innerHTML = text;
        this.setState({
          instructions: textArray
        });
        // console.warn(textArray);

  }
  renderInstruction(){
    if(this.state.index < this.state.instructions.length){
      return(
        <View>
          <Text style={styles.instruction}>{this.state.instructions[this.state.index]}</Text>
        </View>
      )
    }
    else{
      return(
        <View>
          <Text style={styles.instruction}>Ha finalizado la simulacion oprime siguiente paso para salir</Text>
        </View>
      )
    }
  }

  renderDisplayInfo(){
    if(this.state.displayTime && this.state.displayMagnitude && this.state.displayLocation){
      return(
        <View>
          <Text style={styles.info}>Hora: {this.state.displayTime}</Text>
          <Text style={styles.info}>Magnitud: {this.state.displayMagnitude}</Text>
          <Text style={styles.info}>Ubicacion: {this.state.displayLocation}</Text>
        </View>
      )
    }
  }
  render() {
    return (
      <KeyboardAvoidingView benhavior="padding" style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Simulador de evacuación</Text>
          {this.renderDisplayInfo()}
          <View style={styles.logoContainer}>

            {this.renderInstruction()}
          </View>

          <TouchableOpacity onPress={()=>{this.nextInstruction()}}style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Siguiente paso</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent: 'center',
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
      color:'#FFF',
      fontSize: 45,
      marginTop: 20,
      textAlign: 'center',
      opacity: 0.8
    },
    instruction:{
      color:'#FFF',
      fontSize: 30,
      marginTop: 80,
      textAlign: 'center',
      opacity: 0.8
    },
    info:{
      color:'#FFF',
      fontSize: 15,
      marginTop: 30,
      textAlign: 'center',
      opacity: 0.8
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
});
