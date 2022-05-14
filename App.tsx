import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackNavigator from './navigation/Stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootStackNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
