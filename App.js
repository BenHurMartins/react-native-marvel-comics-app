import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/scenes/home';
import ListComics from './src/scenes/listComics';
import {Colors} from './src/styles';

//Redux
import reducers from './src/reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
const store = createStore(reducers);

const Stack = createStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ListComics"
            component={ListComics}
            options={{
              title: 'List of Comics',
              // headerBackground: {backgroundColor: Colors.BACKGROUND},
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
