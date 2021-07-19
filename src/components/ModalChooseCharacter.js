import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Modal,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Colors, Dimensions} from '../styles';
import {getCharacters} from '../services/api';
import {useSelector, useDispatch} from 'react-redux';
import * as types from '../reducers/actionsTypes';
import {useKeyboard} from '@react-native-community/hooks';
import {Button, ListItem} from './';

const ModalChooseCharacter = ({isVisible, closeModal}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [characters, setCharacters] = useState([]);
  const keyboard = useKeyboard();

  const _getCharactersList = () => {
    if (name.length < 4) {
      Alert.alert('Error', 'The search must be at least 4 characters');
    } else {
      getCharacters(name)
        .then(chars => {
          if (chars.length === 0)
            Alert.alert(
              '',
              'We are sorry but there is no character with the searched name.',
            );
          setCharacters(chars);
        })
        .catch(err => console.log(err));
    }
  };

  const _onSelectChar = item => {
    dispatch({type: types.SET_CHAR, payload: item});
    closeModal();
  };

  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={{color: Colors.WHITE}}>X</Text>
          </TouchableOpacity>
          <Text style={styles.title}>List of Comics</Text>
          <ScrollView
            contentContainerStyle={styles.scrolViewContainer(
              keyboard.keyboardShown ? keyboard.keyboardHeight - 40 : 0,
            )}>
            {characters.map(item => (
              <ListItem
                item={item}
                callback={_onSelectChar}
                width={Dimensions.SCREEN_WIDTH - 40}
              />
            ))}
          </ScrollView>
          <View
            style={[
              styles.inputContainerStyle,
              {
                bottom: keyboard.keyboardShown
                  ? keyboard.keyboardHeight - 40
                  : 0,
              },
            ]}>
            <TextInput
              style={styles.inputText}
              placeholder={'Character Name'}
              value={name}
              onChangeText={setName}
              onSubmitEditing={_getCharactersList}
            />
            <Button
              width={Dimensions.SCREEN_WIDTH - 40}
              title={'Search Character'}
              borderRadiusBottom={5}
              onPress={_getCharactersList}
            />
          </View>
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
    borderRadius: 13,
  },
  inputContainerStyle: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.WHITE,
  },
  inputText: {
    width: Dimensions.SCREEN_WIDTH - 40,
    height: 50,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  title: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  closeButton: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: Colors.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 10,
  },
  scrolViewContainer: padding => {
    return {
      paddingBottom: padding + 100,
    };
  },
});

export default ModalChooseCharacter;
