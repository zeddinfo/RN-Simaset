import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation])
  return (
    <View style={styles.page}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo/login1.png')}
      />
      <Text style={styles.titlePrimary}>
        SIMASET <Text style={styles.title}>Mobile</Text>
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'center',
  },
  titlePrimary: {
    fontSize: 28,
    fontWeight: '800',
    fontFamily: 'Nunito-SemiBold',
    alignSelf: 'center',
    color: '#1D2A64',
  },
  logo: {
    width: 200,
    height: 200,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
