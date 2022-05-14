import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ReAnimatedExampleScreen from '../screens/ReAnimatedExampleScreen';
import GestureHandlerScreen from '../screens/GestureHandlerScreen';
import IconsScreen from '../screens/IconsScreen';

export type RootStackParamList = {
  First: undefined;
  Second: undefined;
  ReAnimatedExample: undefined;
  GestureHandler: undefined;
  Icons: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="First" component={FirstScreen} />
      <Stack.Screen name="Second" component={SecondScreen} />
      <Stack.Screen
        name="ReAnimatedExample"
        component={ReAnimatedExampleScreen}
      />
      <Stack.Screen name="GestureHandler" component={GestureHandlerScreen} />
      <Stack.Screen name="Icons" component={IconsScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
