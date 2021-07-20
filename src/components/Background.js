import React from 'react';
import {SafeAreaView, ImageBackground, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../styles';

const Background = props => {
  return props.image ? (
    <ImageBackground style={props.styles} source={props.image}>
      {props.children}
    </ImageBackground>
  ) : (
    <SafeAreaView style={props.styles}>{props.children}</SafeAreaView>
  );
};

export default Background;
