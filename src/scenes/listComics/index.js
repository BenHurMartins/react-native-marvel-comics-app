import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {getCharacterComics} from '../../services/api';
import {ListItemComic} from '../../components/';
import {Colors} from '../../styles/';

const ListComics = () => {
  const route = useRoute();
  const {favoriteChar} = route.params;
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getCharacterComics(favoriteChar.id).then(setComics).catch(console.log);
  }, []);

  comicListItem = item => {
    return <ListItemComic item={item} />;
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>{comics.map(comicListItem)}</ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.BACKGROUND,
  },
});

export default ListComics;
