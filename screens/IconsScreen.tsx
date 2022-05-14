import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

interface IconsScreenProps {}

const IconsScreen: React.FC<IconsScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>
          This is the IconsScreen. To find list of icons, visit:
        </Text>
        <Text style={styles.infoText}>
          https://oblador.github.io/react-native-vector-icons/
        </Text>
      </View>
      <View style={styles.iconsWrapper}>
        <AntDesign name="heart" size={28} color="#20cb53" />
        <AntDesign name="link" size={28} color="#20cb53" />
      </View>

      <View style={styles.iconsWrapper}>
        <Entypo name="dribbble" size={28} color="#b01a77" />
        <Entypo
          name="creative-commons-noncommercial-eu"
          size={28}
          color="#b01a77"
        />
      </View>
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
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#5c5b76',
    lineHeight: 22,
  },
  iconsWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default IconsScreen;
