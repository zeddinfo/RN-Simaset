import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <Text style={styles.dark}>Back</Text>;
    }
    if (icon === 'back-light') {
      return <Text style={styles.light}>Back</Text>;
    }
    return <Text style={styles.dark}>Back</Text>;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({
  dark: {
    margin: 0,
    fontSize: 20,
  },
  light: {
    margin: 0,
    fontSize: 20,
  },
})
