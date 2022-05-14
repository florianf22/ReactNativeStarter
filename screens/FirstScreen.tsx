import * as React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Text, View, StyleSheet, Button} from 'react-native';

import type {RootStackParamList} from '../navigation';
import Spacer from '../components/Spacer';
import useDeviceOS from '../hooks/useDeviceOS';

type FirstScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  'First'
>;

interface FirstScreenProps {}

const FirstScreen: React.FC<FirstScreenProps & FirstScreenNavigationProps> = ({
  navigation,
}) => {
  const isAndroid = useDeviceOS('android');

  const navigateToSecondScreen = () => {
    navigation.navigate('Second');
  };

  const navigateToReAnimatedExampleScreen = () => {
    navigation.navigate('ReAnimatedExample');
  };

  const navigateToGestureHandlerScreen = () => {
    navigation.navigate('GestureHandler');
  };

  const navigateToIconsScreen = () => {
    navigation.navigate('Icons');
  };

  return (
    <View style={styles.container}>
      <Text>Landing Page</Text>
      <Spacer type="big" />
      <Button title="Go to Second Screen" onPress={navigateToSecondScreen} />
      {isAndroid && <Spacer type="small" />}
      <Button
        title="Go to ReAnimatedExample Screen"
        onPress={navigateToReAnimatedExampleScreen}
      />
      {isAndroid && <Spacer type="small" />}
      <Button
        title="Go to GestureHandler Screen"
        onPress={navigateToGestureHandlerScreen}
      />
      {isAndroid && <Spacer type="small" />}
      <Button title="Go to Icons Screen" onPress={navigateToIconsScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonReAnimated: {
    marginTop: 20,
  },
});

export default FirstScreen;
