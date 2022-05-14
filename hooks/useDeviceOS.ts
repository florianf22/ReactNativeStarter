import {Platform} from 'react-native';

const useDeviceOS = (os: string): boolean => {
  return Platform.OS === os;
};

export default useDeviceOS;
