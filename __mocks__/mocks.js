import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// As of react-native@0.64.X file has moved
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
    ...ActualReactRedux,
    useSelector: jest.fn().mockImplementation(() => {
      return {CharacterReducer: {favoriteChar: {}}};
    }),
    useDispatch: jest.fn(),
  };
});

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => jest.fn(),
}));
jest.mock('@react-native-community/hooks', () => ({
  useKeyboard: () => jest.fn(),
}));

jest.mock('../src/services/api.js', () => {
  const getCharacter = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve([]);
    });
  });
  const getCharacterComics = jest.fn().mockImplementation(() => {
    return new Promise((resolve, reject) => {
      resolve([
        {
          thumbnail: {path: 'https'},
          title: 'mock comics',
          prices: [{price: 1.99}],
        },
      ]);
    });
  });
  return {
    getCharacter,
    getCharacterComics,
  };
});
