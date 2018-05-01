import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Container, Content } from 'native-base'
import Swiper from 'react-native-swiper'

class Aulas1 extends Component {

  constructor() {
    super()
    this.state = {
      outerScrollEnabled: true
    }
  }

  verticalScroll = (index) => {
    if (index !== 1) {
      this.setState({
        outerScrollEnabled: false
      })
    }
    else {
      this.setState({
        outerScrollEnabled: true
      })
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Swiper
            loop={false}
            showsPagination={false}
            index={1}
            scrollEnabled={this.state.outerScrollEnabled}
          >

            <View style={styles.slideDefault}>
                <Text style={styles.text}>Planta Baja</Text>
                <Image
                style={styles.stretch}
                source={require('../../Images/aulas2/AULAS2_0.png')}
              />
              </View>
            <View style={styles.slideDefault}>
                <Text style={styles.text}>Primer Nivel</Text>
                <Image
                style={styles.stretch}
                source={require('../../Images/aulas2/AULAS2_1.png')}
              />
            </View>
            <Swiper
              loop={false}
              showsPagination={false}
              horizontal={false}
              index={1}
              onIndexChanged={(index) => this.verticalScroll(index)}
            >
              <View style={styles.slideDefault}>
                 <Text style={styles.text}>Segundo Nivel</Text>
                 <Image
                 style={styles.stretch}
                 source={require('../../Images/aulas2/AULAS2_2.png')}
                />
              </View>
              <View style={styles.slideDefault}>
                 <Text style={styles.text}>Tercer Nivel</Text>
                 <Image
                 style={styles.stretch}
                 source={require('../../Images/aulas2/AULAS2_3.png')}
                />
              </View>
            </Swiper>
            <View style={styles.slideDefault}>
                <Text style={styles.text}>Cuarto Nivel</Text>
                <Image
                style={styles.stretch}
                source={require('../../Images/aulas2/AULAS2_4.png')}
                />
            </View>
          </Swiper>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    slideDefault: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#3498db'
    },
    text: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold'
    },
    stretch: {
        width: 300,
        height: 400
      }
  })

  export default Aulas1;