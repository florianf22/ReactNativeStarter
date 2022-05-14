import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {IMAGES} from '../constants/images';

interface FastImageScreenProps {}

const FastImageScreen: React.FC<FastImageScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>
          This is the an example screen of the fast image component.
        </Text>
      </View>

      <FastImage
        style={styles.fastImage}
        // source={{
        //   uri: IMAGES.fastImage.uri,
        //   priority: FastImage.priority.normal,
        // }}
        resizeMode={FastImage.resizeMode.contain}
        source={require('../assets/images/fastimage.jpeg')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  infoWrapper: {
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5c5b76',
    lineHeight: 22,
  },
  fastImage: {
    width: IMAGES.fastImage.width,
    height: IMAGES.fastImage.height,
  },
});

export default FastImageScreen;
