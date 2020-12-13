import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Gap, Input, Link} from '../../components/Atom';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo/logo-primadana.png')}
        />
        <Text style={styles.title}>
          Masuk dan mulai manajemen Asset Perusahaan
        </Text>
        <Input label="Username" placeholder="Isikan Username..." />
        <Gap height={24} />
        <Input
          label="Password"
          placeholder="Isikan Password..."
          secureTextEntry
        />
        <Gap height={10} />
        <Link
          title="Lupa Password"
          size={12}
          onPress={() => navigation.navigate('ResetPassword')}
        />
        <Gap height={30} />
        <Button title="Login" />
        <Gap height={20} />
        <Link
          title="Buat Akun Baru"
          size={16}
          align="center"
          onPress={() => navigation.navigate('Register')}
        />
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {paddingHorizontal: 40, backgroundColor: 'white', flex: 1},
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#1D2A64',
    marginTop: 40,
    marginBottom: 20,
    maxWidth: 250,
  },
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 30,
    resizeMode: 'contain',
    width: 250
  },
});
