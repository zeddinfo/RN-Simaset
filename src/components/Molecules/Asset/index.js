import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const Asset = ({navigation, onPress, url, status, title, harga}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: url,
        }}
        style={styles.image}
      />
      <View style={styles.title}>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <View style={styles.status}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{status}</Text>
        </View>
        <View>
          <Text style={styles.harga}>Rp {harga}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Asset;

const styles = StyleSheet.create({
  card: {
    height: 240,
    width: 180,
    backgroundColor: '#ebebfc',
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  image: {
    height: '75%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  titleText: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 17,
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginRight: 10,
  },
  category: {
    backgroundColor: '#33beff',
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    // alignItems: 'center',
    alignContent: 'center',
  },
  categoryText: {
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
  },
  harga: {
    fontFamily: 'Nunito-ExtraBold',
    color: '#FF8C00',
  },
});
