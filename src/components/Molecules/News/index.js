import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';

const News = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  info: {
    backgroundColor: '#deeafa',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: -10,
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
  },
});
