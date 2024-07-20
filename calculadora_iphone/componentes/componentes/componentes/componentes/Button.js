import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Button = ({ onPress, text, size, color }) => {
  const buttonStyles = [styles.button, size === 'double' && styles.buttonDouble, { backgroundColor: color }];
  const textStyles = [styles.text, color === '#fff' && styles.textDark];

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').width / 4 - 8,
    width: Dimensions.get('window').width / 4 - 8,
    borderRadius: Dimensions.get('window').width / 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    backgroundColor: '#333',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 3) - 10,
  },
  text: {
    color: '#fff',
    fontSize: 30,
  },
  textDark: {
    color: '#333',
  },
});

export default Button;
