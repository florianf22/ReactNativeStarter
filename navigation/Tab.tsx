import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SecondScreen from '../screens/SecondScreen';
import IconsScreen from '../screens/IconsScreen';

export type TabParamList = {
  Icons: undefined;
  Second: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#204297',
      }}>
      <Tab.Screen
        name="Icons"
        component={IconsScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconColor = focused ? '#e91e63' : '#204297';

            if (color) {
              // dummy
            }

            return <Ionicons name="ios-heart" size={size} color={iconColor} />;
          },
        }}
      />
      <Tab.Screen
        name="Second"
        component={SecondScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let iconColor = focused ? '#e91e63' : '#204297';

            if (color) {
              // dummy
            }

            return <Ionicons name="ios-heart" size={size} color={iconColor} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
