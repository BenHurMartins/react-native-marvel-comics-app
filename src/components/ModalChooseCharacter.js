import React, {useState} from 'react';
import {
  SafeAreaView,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors, Dimensions} from '../styles';
import {getCharacters} from '../services/api';
import {useSelector, useDispatch} from 'react-redux';
import * as types from '../reducers/actionsTypes';

const ModalChooseCharacter = ({isVisible, closeModal}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('iron');
  const [characters, setCharacters] = useState([]);

  const getCharactersList = () => {
    getCharacters(name)
      .then(setCharacters)
      .catch(err => console.log(err));
  };

  const onSelectChar = item => {
    dispatch({type: types.SET_CHAR, payload: item});
    closeModal();
  };

  const charactersListElement = item => {
    return <Text onPress={() => onSelectChar(item)}>{item.name}</Text>;
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text onPress={() => closeModal()}>List Comics</Text>
          <Text onPress={() => getCharactersList()}>List Comics</Text>
          <View>{characters.map(charactersListElement)}</View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
  modalView: {
    backgroundColor: Colors.WHITE,
    margin: 40,
    width: Dimensions.SCREEN_WIDTH - 40,
    flex: 1,
  },
});

export default ModalChooseCharacter;
