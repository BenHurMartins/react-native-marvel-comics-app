import React from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from './';
import {Colors, Dimensions} from '../styles';

const FavoriteChar = ({favoriteChar}) => {
  const {name, description} = favoriteChar;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Button
        width={Dimensions.SCREEN_WIDTH - 40}
        title={'Explore Comics'}
        borderColor={Colors.SECONDARY}
        onPress={() => navigation.navigate('ListComics', {favoriteChar})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  descriptionContainer: {
    width: Dimensions.SCREEN_WIDTH - 40,
    backgroundColor: Colors.BACKGROUND,
    marginBottom: 10,
    borderRadius: 13,
  },
  title: {
    color: Colors.PRIMARY,
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 10,
    backgroundColor: Colors.BACKGROUND,
    marginTop: 10,
  },
  description: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'justify',
    marginTop: 7,
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: Colors.BACKGROUND,
  },
});
export default FavoriteChar;
