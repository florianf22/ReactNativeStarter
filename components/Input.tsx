import * as React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';

interface InputProps extends TextInputProps {
  error?: string;
}

const Input: React.FC<InputProps> = ({style, error, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput style={[styles.input, style]} {...props} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 8,
    fontSize: 16,
    backgroundColor: 'transparent',
    width: '80%',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default Input;
