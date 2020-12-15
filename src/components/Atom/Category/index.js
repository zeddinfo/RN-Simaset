import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Maintenance, Sell, Rent} from '../../../assets';

const Category = ({title, icon, onPress}) => {
  const Icon = () => {
    if (icon === 'sell') {
      return <Image source={Sell} style={styles.icon} />;
    }
    if (icon === 'maintenance') {
      return <Image source={Maintenance} style={styles.icon} />;
    }
    if (icon === 'rent') {
      return <Image source={Rent} style={styles.icon} />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  icon: {
    marginLeft: 30,
    marginRight: 30,
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    marginLeft: 30,
    marginRight: 30,
  },
});
