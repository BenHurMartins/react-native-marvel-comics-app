import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../styles';

const Button = ({width, title, borderRadiusBottom, onPress}) => {
  const navigation = useNavigation();

  const propsStyles = {
    width: width,
    borderBottomLeftRadius: borderRadiusBottom | 0,
    borderBottomRightRadius: borderRadiusBottom | 0,
  };

  return (
    <TouchableOpacity style={[styles.button, propsStyles]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
  },
});

export default Button;
