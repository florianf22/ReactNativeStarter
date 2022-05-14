import * as React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

interface ReAnimatedExampleScreenProps {}

const ReAnimatedExampleScreen: React.FC<ReAnimatedExampleScreenProps> = () => {
  const xBox = useSharedValue(0);
  const yBox = useSharedValue(0);

  const onBoxClick = (): void => {
    xBox.value = withSpring(Math.random() * 100);
    yBox.value = withSpring(Math.random() * 100);
  };

  const boxStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: xBox.value,
        },
        {
          translateY: yBox.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>
          This is an example app of the reanimated2. Click on the box to move it
          randomly
        </Text>
      </View>
      <TouchableWithoutFeedback onPress={onBoxClick}>
        <Animated.View style={[styles.box, boxStyles]}>
          <Text style={styles.boxText}>Click Me</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoWrapper: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5c5b76',
    lineHeight: 22,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#5c5b76',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    color: '#fff',
  },
});

export default ReAnimatedExampleScreen;
