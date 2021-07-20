import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Colors, Dimensions} from '../styles';

const ListItem = ({item, callback}) => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.listItemContainer}
        // onPress={() => callback(item)}
      >
        <Image
          style={styles.image}
          resizeMode={'cover'}
          height={40}
          width={40}
          source={{
            uri: `${item.thumbnail?.path.toString()}/landscape_small.jpg`.replace(
              'http://',
              'https://',
            ),
          }}
        />
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>
            {`Print Price: ${item.prices[0]?.price}`}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    // backgroundColor: Colors.PRIMARY,
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  title: {
    color: Colors.WHITE,
    fontSize: 20,
  },
  divider: {
    width: '90%',
    height: 0.5,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.PRIMARY,
  },
  image: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    height: 20,
    width: Dimensions.SCREEN_WIDTH - 80,
  },
  description: {
    fontSize: 10,
    fontWeight: '300',
    // width: Dimensions.SCREEN_WIDTH / 2,
    height: 12,
  },
});

export default ListItem;
