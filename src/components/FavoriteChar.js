import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const FavoriteChar = ({favoriteChar}) => {
  const {name} = favoriteChar;
  const navigation = useNavigation();

  const exploreComics = () => {};
  console.log(
    `${favoriteChar.thumbnail?.path.toString()}/portrait_uncanny.jpg`,
  );
  return (
    <View style={{width: '100%'}}>
      <Image
        source={{
          uri: `${favoriteChar.thumbnail?.path.toString()}/portrait_uncanny.jpg`.replace(
            'http://',
            'https://',
          ),
        }}
        style={{height: 150, width: 100, resizeMode: 'contain'}}
        resizeMode={'contain'}
        height={120}
        width={120}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('ListComics', {favoriteChar})}>
        <Text>Explore Comics</Text>
      </TouchableOpacity>
      <Text>{name}</Text>
    </View>
  );
};

export default FavoriteChar;
