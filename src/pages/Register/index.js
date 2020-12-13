import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Bg, Primadana} from '../../assets';
import {Button, Header, Input, Gap} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Registrasi Akun" />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo/logo-primadana.png')}
          />
          <Input label="Nama Lengkap" placeholder="Isikan Nama Lengkap..." />
          <Gap height={20} />
          <Input label="Username" placeholder="Isikan Username..." />
          <Gap height={20} />
          <Input
            label="Password"
            secureTextEntry
            placeholder="Isikan Password..."
          />
          <Gap height={25} />
          <Button title="Registrasi" />
        </ScrollView>
      </View>
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  content: {padding: 30, paddingTop: 0},
  page: {backgroundColor: 'white', flex: 1},
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
    marginTop: 20,
    resizeMode: 'contain',
    width: 250,

  },
  login: {
    fontWeight: 'bold',
    color: '#1D2A64'
  },
  question: {
    alignSelf: 'center',
    alignItems: 'center',
  }
});
