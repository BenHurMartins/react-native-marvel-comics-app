import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors} from '../styles';

const Button = ({
  width,
  title,
  borderRadiusBottom,
  onPress,
  titleStyle,
  buttonColor,
  borderColor,
}) => {
  const navigation = useNavigation();

  console.log(buttonColor);
  const propsStyles = {
    width: width,
    borderBottomLeftRadius: borderRadiusBottom ? borderRadiusBottom : 0,
    borderBottomRightRadius: borderRadiusBottom ? borderRadiusBottom : 0,
    backgroundColor: buttonColor ? buttonColor : Colors.PRIMARY,
    borderWidth: borderColor ? 1 : 0,
    borderColor: borderColor,
  };

  return (
    <TouchableOpacity style={[styles.button, propsStyles]} onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
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
