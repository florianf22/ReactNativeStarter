import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

interface GestureHandlerScreenProps {}

const GestureHandlerScreen: React.FC<GestureHandlerScreenProps> = () => {
  const isPressed = useSharedValue(false);
  const positionStart = useSharedValue({
    x: 0,
    y: 0,
  });
  const offsetPosition = useSharedValue({
    x: 0,
    y: 0,
  });
  const backgroundValue = useDerivedValue(() => {
    const {x, y} = offsetPosition.value;

    return y === 0 ? 1 : x / y;
  });

  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(e => {
      offsetPosition.value = {
        x: e.translationX + positionStart.value.x,
        y: e.translationY + positionStart.value.y,
      };
    })
    .onEnd(() => {
      positionStart.value = {
        x: offsetPosition.value.x,
        y: offsetPosition.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => {
    const backgroundColor = interpolate(
      backgroundValue.value,
      [-200, 200],
      [0, 256],
    );

    return {
      backgroundColor: `rgb(${offsetPosition.value.x * 2}, ${
        offsetPosition.value.y * 2
      }, ${backgroundColor})`,
      transform: [
        {
          translateX: offsetPosition.value.x,
        },
        {
          translateY: offsetPosition.value.y,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>
          This is an example app of the React Native Gesture Handler and
          reAnimated2. Click on the ball to move it randomly
        </Text>
      </View>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.ball, animatedStyles]} />
      </GestureDetector>
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
    zIndex: 2,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5c5b76',
    lineHeight: 22,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});

export default GestureHandlerScreen;
