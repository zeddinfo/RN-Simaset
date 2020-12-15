import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Bell} from '../../../assets';

const HomeProfile = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity>
        <Image source={Bell} style={styles.notif} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D2A64',
    paddingHorizontal: 16,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  notif: {
    width: 20,
    height: 20,
  },
});
