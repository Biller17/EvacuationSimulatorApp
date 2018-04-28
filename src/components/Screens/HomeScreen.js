import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";
import {Card, Button} from "react-native-elements";

import{Icon, Container, Header, Content, Left} from 'native-base'

class HomeScreen extends Component {
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
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <View style={{ flex: 1}}>
            <ScrollView contentContainerStyle={{
                paddingVertical: 20
              }}>
              {images.map(({name, image, url, key}) => (
                <Card title={`Aulas ${key}`} image={image} key={key}>
                  <Text style={{
                      marginBottom: 10
                    }}>{name}.
                  </Text>
                  <Button
                    backgroundColor="#03A9F4"
                    title="Ver planos"
                    onPress={() => Linking.openURL(url)}/>
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
    url: "https://unsplash.com/photos/C9t94JC4_L8"
  }, {
    key: 2,
    name: "Aulas 2",
    url: "https://unsplash.com/photos/waZEHLRP98s"
  }, {
    key: 3,
    name: "Aulas 3",
    url: "https://unsplash.com/photos/cFplR9ZGnAk"
  }, {
    key: 4,
    name: "EGADE",
    url: "https://unsplash.com/photos/89PFnHKg8HE"
  }
];

export default HomeScreen;
