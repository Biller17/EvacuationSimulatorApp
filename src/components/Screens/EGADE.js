import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Dimensions,
  Modal,
} from 'react-native';
 
import ImageElement from '../Screens/ImageElement';

class EGADE extends Component {
    state={
        modalVisible: false,
        modalImage: require('../../Images/egade/EGADE_0.png'),
        images:[
            require('../../Images/egade/EGADE_0.png'),
            require('../../Images/egade/EGADE_1.png'),
            require('../../Images/egade/EGADE_2.png'),
            require('../../Images/egade/EGADE_3.png'),
            require('../../Images/egade/EGADE_4.png'),
            require('../../Images/egade/EGADE_5.png'),
            require('../../Images/egade/EGADE_6.png')
        ]
    }

    setModalVisible(visible, imageKey){
        this.setState({modalImage: this.state.images[imageKey]});
        this.setState({modalVisible: visible});
    }

    getImage(){
        return this.state.modalImage;
    }


    render() {
        let images = this.state.images.map((val, key) =>{
            return<TouchableNativeFeedback key={key}
                        onPress={()=>{this.setModalVisible(true, key)}}>
                        <View>
                            <ImageElement imgsource={val}></ImageElement>
                        </View>
                    </TouchableNativeFeedback>

        });
      return (
          <View style = {styles.container}>
            <Modal style={styles.modal} animationType={'fade'}
                    transparent={true} visible={this.state.modalVisible}
                    onRequestClose={() => {}}>

                    <View style={styles.modal}>
                        <Text style={styles.text}
                            onPress={() => {this.setModalVisible(false)}}> Close</Text>
                        <ImageElement imgsource={this.state.modalImage}></ImageElement>
                    </View>
            </Modal>
            {images}
          </View>
      );
    }
  }

  const styles = StyleSheet.create({
      container:{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          backgroundColor: '#eee',
      },
      imagewrap:{
        margin: 2,
        padding: 2,
        height: (Dimensions.get('window').height/3)-12,
        width: (Dimensions.get('window').width/2)-4,
        backgroundColor: '#fff',
      },
      modal:{
          flex: 1,
          padding: 40,
          backgroundColor: 'rgba(0,0,0,0.9)'
      },
      text:{
          color: '#fff'
      }

  })

  export default EGADE;
 
