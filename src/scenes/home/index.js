import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ModalChooseCharacter, FavoriteChar} from '../../components/';
import {useSelector, useDispatch} from 'react-redux';

const Home = () => {
  const {favoriteChar} = useSelector(state => state.CharacterReducer);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  console.log(favoriteChar);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ModalChooseCharacter
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
      />
      <View style={styles.presentationContainer}>
        <Text>Hi!</Text>
        <Text>Welcome to the Marvel Comics app :)</Text>
        <Text>
          This is not an official Marvel app, here you can choose your favorite
          character and find every comics related to this hero, or perhaps
          villain!
        </Text>
      </View>
      <View style={styles.selectionContainer}>
        <FavoriteChar favoriteChar={favoriteChar} />
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text>
            {favoriteChar?.name ? 'Change Character' : 'Choose Character'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  presentationContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  selectionContainer: {
    flex: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
