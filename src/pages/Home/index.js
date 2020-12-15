import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Arrow, bgHome, Info} from '../../assets';
import {Category, Gap} from '../../components/Atom';
import HomeProfile from '../../components/Molecules/HomeProfile';

const Home = () => {
  const win = Dimensions.get('window');
  const {width, height} = win;

  return (
    <View style={styles.page}>
      <HomeProfile title="SIMASET" />
      <View style={styles.header}>
        <ImageBackground
          source={bgHome}
          style={{width: width * 1, height: height * 0.2, padding: 10}}>
          <Text style={styles.infoUser}>Hello, Adi Siswoyo</Text>
          <View style={styles.saldo}>
            <Text style={styles.infoSaldo}>Rp </Text>
            <Text style={styles.infoSaldoValue}>2.000</Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.infoPoint}>Point Anda </Text>
            <Text style={styles.infoPointValue}>1.000</Text>
          </View>
          <View style={styles.category}>
            <Category title="Sewa" icon="rent" />
            <Category title="Progress" icon="maintenance" />
            <Category title="Jual" icon="sell" />
          </View>
          <View style={styles.news}>
            <TouchableOpacity>
              <View style={styles.cek}>
                <Image source={Info} style={styles.logoinfo} />
                <View>
                  <Text style={styles.titleHeader}>
                    Update Infromasi Terbaru
                  </Text>
                  <Text style={styles.title}>
                    Cek di website www.kspprimadana.co.id
                  </Text>
                </View>
                <Image source={Arrow} style={styles.logoarrow} />
              </View>
              {/* <View style={styles.container}>
                <Text style={styles.titleHeader}>Update Infromasi Terbaru</Text>
                <Text style={styles.title}>
                  Bisa lihat di website www.kspprimadana.co.id
                </Text>
              </View> */}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cek: {
    flexDirection: 'row',
  },
  logoinfo: {
    width: 25,
    height: 25,
    flexDirection: 'row',
    marginRight: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  logoarrow: {
    width: 15,
    height: 15,
    flexDirection: 'row',
    marginRight: 5,
    marginLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  titleHeader: {
    color: 'white',
    fontWeight: '100',
    fontFamily: 'Nunito-SemiBold',
  },
  title: {
    color: 'white',
  },
  news: {
    marginTop: 20,
    backgroundColor: '#4AAFDF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 30,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 30,
    // margin: 10,
    height: 400,
  },
  category: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 30,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  infoUser: {
    fontSize: 20,
    fontWeight: '100',
    color: 'white',
    fontFamily: 'Nunito-SemiBold',
  },
  saldo: {
    flexDirection: 'row',
  },
  infoSaldo: {
    fontSize: 15,
    fontFamily: 'Nunito-SmiBold',
    color: 'white',
    fontWeight: '600',
  },
  infoSaldoValue: {
    fontSize: 20,
    fontFamily: 'Nunito-SmiBold',
    color: 'white',
    fontWeight: '600',
  },
  point: {
    flexDirection: 'row',
  },
  infoPoint: {
    fontSize: 20,
    fontFamily: 'Nunito-SmiBold',
    color: 'white',
    fontWeight: '600',
  },
  infoPointValue: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 20,
    color: '#FF8C00',
  },
});
