import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import BtnIconSend from './BtnIconSend';
import IconOnly from './IconOnly';

const Button = ({type, title, onPress, icon, disable}) => {
  if (type === 'btn-icon-send') {
    return <BtnIconSend disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#1D2A64',
    paddingVertical: 10,
    borderRadius: 15,
    width: 250,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: type === 'secondary' ? '#1D2A64' : '#1D2A64',
  }),
  text: (type) => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: type === 'secondary' ? '#1D2A64' : 'white',
  }),
  disableBg: {
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  disableText: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: 'white',
  },
});
