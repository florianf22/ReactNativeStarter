import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface SecondScreenProps {}

const SecondScreen: React.FC<SecondScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>This is a screen to demonstrate navigation, you can go back</Text>
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
