import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

import{Icon, Container, Header, Content, Left} from 'native-base'

import Gallery from 'react-native-image-gallery';

  render() {
    return (
      <Gallery
        style={{ flex: 1, backgroundColor: 'black' }}
        images={[
          { source: require('yourApp/image.png'), dimensions: { width: 150, height: 150 } },
          { source: { uri: '../../Images/aulas1/AULAS1_2' } },
          { source: { uri: '../../Images/aulas1/AULA1_3' } },
          { source: { uri: '../../Images/aulas1/AULA1_4' } },
          { source: { uri: '../../Images/aulas1/AULA1_3' } }
        ]}
      />
    );
  }