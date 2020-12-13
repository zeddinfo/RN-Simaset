import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Input, Link} from '../../components/Atom';

const InputPassword = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo/logo-primadana.png')}
        />
        <Text style={styles.title}>
          Silahkan Masukkan Password Baru Akun Anda.
        </Text>
        <Input label="Password Baru" placeholder="Isikan Password Baru..." />
        <Gap height={24} />
        <Input
          label="Konfirmasi Password Baru"
          placeholder="Isikan Password Baru..."
        />
        <Button title="Reset Passwprd" />
        <Gap height={20} />
        <Link
          title="Atau Buat Akun Baru"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};

export default InputPassword;

const styles = StyleSheet.create({
  page: {paddingHorizontal: 40, backgroundColor: 'white', flex: 1},
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#1D2A64',
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    resizeMode: 'contain',
    width: 250
  },
});
