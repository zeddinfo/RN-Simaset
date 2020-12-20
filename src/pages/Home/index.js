import React from 'react';
import {ScrollView} from 'react-native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Arrow, bgHome, Info} from '../../assets';
import {Category, Gap} from '../../components/Atom';
import {Asset, News} from '../../components/Molecules';
import HomeProfile from '../../components/Molecules/HomeProfile';

const Home = () => {
  const win = Dimensions.get('window');
  const {width, height} = win;

  const oke = () => {
    alert('oke');
  };

  return (
    <View style={styles.page}>
      <ScrollView>
        <View style={styles.content}>
          <HomeProfile title="Simaset" />
          <View style={styles.title}>
            <Text style={styles.htitle}>Kategori</Text>
          </View>
          <View style={styles.sectionPilihan}>
            <Category title="Dijual" icon="sell" />
            <Category title="Disewa" icon="rent" />
            <Category title="Perbaikan" icon="maintenance" />
          </View>
          <View style={styles.title}>
            <Text style={styles.htitle}>Highlight Asset</Text>
            <Text style={styles.hstitle}>Asset yang paling dicari</Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.asset}>
                <Asset
                  title="Rumah Pak Boss"
                  status="Dijual"
                  harga="10.000.000"
                  url="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                />
                <Asset
                  title="Rumah Pak Boss"
                  status="Dijual"
                  harga="10.000.000"
                  url="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                />
                <Asset
                  title="Rumah Pak Boss"
                  status="Dijual"
                  harga="10.000.000"
                  url="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                />
                <Asset
                  title="Rumah Pak Boss"
                  status="Dijual"
                  harga="10.000.000"
                  url="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                />
                <Asset
                  title="Rumah Pak Boss"
                  status="Dijual"
                  harga="10.000.000"
                  url="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                />
                <Asset
                  title="Rumah Pak Boss"
                  status="Dijual"
                  harga="10.000.000"
                  url="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                />
                <Asset
                  title="Rumah Pak Boss"
                  status="Dijual"
                  harga="10.000.000"
                  url="https://images.unsplash.com/photo-1602524815920-35f31875e44c?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                />
              </View>
            </ScrollView>
          </View>
          <View style={styles.sectionInfo}>
            <View style={styles.title}>
              <Text style={styles.htitle}>Info Terbaru</Text>
            </View>
            <News title="Corona Berbahaya" />
            <News title="Tes Antigen Sekarang Wajib di Jakarta" />
            <News title="Demi Mengatasi Banjir, Kabupaten Kendal ..." />
            <News title="Sering Terkena Banjir Jalan Mangkang Akan di Per..." />
            <News title="Corona Berbahaya, Patuhi Protokol Kesehatan" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapperScroll: {
    marginHorizontal: -10,
  },
  asset: {
    flexDirection: 'row',
  },
  title: {
    marginTop: 20,
    marginLeft: 10,
  },
  htitle: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 20,
  },
  hstitle: {
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 15,
  },
  sectionPilihan: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,

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
});
