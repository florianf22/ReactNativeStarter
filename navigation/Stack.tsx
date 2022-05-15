import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ReAnimatedExampleScreen from '../screens/ReAnimatedExampleScreen';
import GestureHandlerScreen from '../screens/GestureHandlerScreen';
import IconsScreen from '../screens/IconsScreen';
import TabNavigator from './Tab';
import DrawerNavigator from './Drawer';
import FastImageScreen from '../screens/FastImageScreen';
import FormikScreen from '../screens/FormikScreen';

export type RootStackParamList = {
  First: undefined;
  Second: undefined;
  ReAnimatedExample: undefined;
  GestureHandler: undefined;
  Icons: undefined;
  Tab: undefined;
  Drawer: undefined;
  FastImage: undefined;
  Formik: undefined;
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
      <Stack.Screen name="Tab" component={TabNavigator} />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="FastImage" component={FastImageScreen} />
      <Stack.Screen name="Formik" component={FormikScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;
