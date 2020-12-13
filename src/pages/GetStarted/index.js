import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Bg, Primadana} from '../../assets';
import {Button} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/logo/logo-primadana.png')}
      />
      <View style={styles.header}>
        <Text style={styles.textHeader}>
          Aplikasi Manajemen Asset KSP Primadana
        </Text>
      </View>
      <Image
        style={styles.ilustration}
        source={require('../../assets/background/ilustration1.png')}
      />
      <View style={styles.paragraf}>
        <Text style={styles.textParagraf}>
          Sekarang Monitoring Asset Jadi Lebih Mudah
        </Text>
      </View>
      <View>
        <Button
          title="Registrasi Akun"
          onPress={() => navigation.navigate('Register')}
        />
        <Button
          type="secondary"
          title="Login"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 91,
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
  logo: {
    width: 150,
    height: 30,
    marginTop: 10,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  container: {
    flex: 1,
    // paddingRight: 20,
    backgroundColor: 'white',
  },
  textHeader: {
    fontSize: 25,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
    color: '#1D2A64',
    marginBottom: 10,
  },
  ilustration: {
    marginTop: 25,
    alignSelf: 'center',
    alignItems: 'center',
    width: 320,
    height: 240
  },
  textParagraf: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: '400',
    marginTop: 10,
    fontFamily: 'Nunito-SemiBold',
    color: '#1D2A64',
  },
  paragraf: {
    padding: 10,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
