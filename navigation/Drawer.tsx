import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import IconsScreen from '../screens/IconsScreen';
import SecondScreen from '../screens/SecondScreen';

export type DrawerParamList = {
  Icons: undefined;
  Second: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Icons" component={IconsScreen} />
      <Drawer.Screen name="Second" component={SecondScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
