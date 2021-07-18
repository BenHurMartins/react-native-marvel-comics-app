import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ListComics = () => {
  const route = useRoute();
  const {favoriteChar} = route.params;

  useEffect(() => {}, []);

  comicListItem = item => {
    console.log('comic');
    console.log(item);
    return <Text>{item.name}</Text>;
  };

  return (
    <SafeAreaView>
      <Text>List Comics</Text>
      {favoriteChar.comics.items.map(comicListItem)}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ListComics;
