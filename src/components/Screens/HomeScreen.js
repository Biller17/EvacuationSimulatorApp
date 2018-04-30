import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";
import {Card, Button} from "react-native-elements";
import {Actions} from "react-native-router-flux";
import{Icon, Container, Header, Content, Left} from 'native-base'

class HomeScreen extends Component {

  static navigationOptions ={
    drawerIcon:(
      <Image source={require('../../Images/home.png')}
        style={{height:24, width:24}}/>
    )
  }

  goToAulas1(){
    Actions.aulas1();
  }
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
          }}>
          <View style={{ flex: 1}}>
            <ScrollView contentContainerStyle={{
                paddingVertical: 20
              }}>
              {images.map(({name, image, url, key}) => (
                <Card title={`Edificio Aulas ${key}`} image={image} key={key}>
                  <Text style={{
                      marginBottom: 10
                    }}>{name}.
                  </Text>
                  <Button
                    backgroundColor="#03A9F4"
                    title="Ver planos"
                    onPress={() => this.goToAulas1()}/>
                </Card>
              ))}
            </ScrollView>
           </View>
        </Content>
      </Container>
    );
  }
}

const images = [
  {
    key: 1,
    name: "Aulas 1",
    image: require("../../Images/aulas.jpg"),
  }, {
    key: 2,
    name: "Aulas 2",
    image: require("../../Images/aulas.jpg"),
  }, {
    key: 3,
    name: "Aulas 3",
    image: require("../../Images/aulas.jpg"),
  }, {
    key: 5,
    name: "EGADE",
    image: require("../../Images/egade.jpg"),
  }
];

export default HomeScreen;
