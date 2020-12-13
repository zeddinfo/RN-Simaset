import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const BtnIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <Text style={styles.disable}>Back</Text>}
      {!disable && <Text style={styles.enable}>Back</Text>}
    </View>
  );
}

export default BtnIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    backgroundColor: disable ? '#1D2A64' : 'black',
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
