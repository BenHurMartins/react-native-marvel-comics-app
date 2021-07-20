import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  ModalChooseCharacter,
  FavoriteChar,
  Button,
  Background,
} from '../../components/';
import {useSelector, useDispatch} from 'react-redux';
import {Colors, Dimensions} from '../../styles';

const Home = () => {
  const {favoriteChar} = useSelector(state => state.CharacterReducer);
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const image = favoriteChar?.thumbnail
    ? {
        uri: `${favoriteChar?.thumbnail?.path.toString()}/portrait_uncanny.jpg`.replace(
          'http://',
          'https://',
        ),
      }
    : false;

  return (
    <Background styles={styles.mainContainer} image={image}>
      <ModalChooseCharacter
        isVisible={showModal}
        closeModal={() => setShowModal(false)}
      />
      <View style={styles.presentationContainer}>
        <View
          style={{
            backgroundColor: Colors.BACKGROUND,
            padding: 5,
            borderRadius: 13,
          }}>
          <Text style={styles.title}>Hi!</Text>
          <Text style={styles.description}>
            Welcome to the Marvel Comics app :)
          </Text>
          <Text style={styles.description}>
            This is not an official Marvel app, but here you can choose your
            favorite character and find every comics related to this hero, or
            perhaps villain!
          </Text>
        </View>
      </View>
      <View style={styles.selectionContainer}>
        {favoriteChar ? <FavoriteChar favoriteChar={favoriteChar} /> : null}

        <Button
          width={Dimensions.SCREEN_WIDTH - 40}
          title={favoriteChar?.name ? 'Change Character' : 'Choose Character'}
          borderColor={Colors.SECONDARY}
          onPress={() => setShowModal(true)}
        />
      </View>
    </Background>
  );
  s;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.BACKGROUND,
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
  title: {
    color: Colors.PRIMARY,
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 10,
    backgroundColor: Colors.BACKGROUND,
  },
  description: {
    color: Colors.PRIMARY,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'justify',
    marginTop: 7,
    marginHorizontal: 10,
    backgroundColor: Colors.BACKGROUND,
  },
});

export default Home;
