import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import type {CompositeScreenProps} from '@react-navigation/native';
import type {DrawerScreenProps} from '@react-navigation/drawer';
import {DrawerParamList, RootStackParamList} from '../navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Spacer from '../components/Spacer';

type SecondScreenNavigationProp = CompositeScreenProps<
  DrawerScreenProps<DrawerParamList, 'Second'>,
  NativeStackScreenProps<RootStackParamList>
>;

interface SecondScreenProps {}

const SecondScreen: React.FC<
  SecondScreenProps & SecondScreenNavigationProp
> = ({navigation}) => {
  const navigateToFirstScreen = () => {
    navigation.navigate('First');
  };

  return (
    <View style={styles.container}>
      <Text>This is a screen to demonstrate navigation, you can go back</Text>
      <Spacer type="big" />
      <Button title="Go to First Screen" onPress={navigateToFirstScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SecondScreen;
