import React, { Component } from 'react';
import { StatusBar, View, ScrollView } from 'react-native';

import 'react-native-gesture-handler';

import InformationFeature from '../../../components/molecules/InformationFeature';
import SearchFeature from '../../../components/molecules/SearchFeature';
import UmraBanner from '../../../components/molecules/UmraBanner';
import UmraNews from '../../../components/molecules/UmraNews';
import HomeMainFeatures from '../../../containers/organisms/HomeMainFeatures';
import NavBar from '../../../containers/organisms/NavBar';
import ScrollabelPackage from '../../../containers/organisms/ScrollablePackage';
import UmraPayFeatures from '../../../containers/organisms/UmraPayFeatures';



class Home extends Component {
    render(){
        return (
    <>
    <StatusBar barStyle="white-content" />
    {/* ini adalah pembuka pembungkus awal atau induk dari tampilan */}
    <View style={{flex: 1}}>
      {/* Lalu ini penutupnya, cukup sampai sini */}
        <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      {/* Search Bar Section */}
            <SearchFeature/>
      {/* End SearchBar Section */}
      {/* Gopay */}
            <UmraPayFeatures/>
      {/* Main Content /feature Section */}
            <HomeMainFeatures/>
      {/* End Main Content Feature Section */}
      {/* Batas Border antara section atas dan bawah */}
            <View style={{height:17, backgroundColor: '#F2F2F4', marginTop:20}}></View>
      {/* Penutup Border */}
      {/* News Section */}
            <UmraNews onPress={() => this.props.navigation.navigate('NewsDetail')}/>
      {/* Penutup News Section */}
      {/* Internal Information Section */}
            <InformationFeature/>
      {/* UMRA Banner Section */}
            <UmraBanner img={require('../../../assets/dummy/fitur.jpg')}
                        imglogo={require('../../../assets/dummy/umralog.png')}
                        title="Gratis Voucher Umroh Untukmu!"/>
      {/* Penutup Wrapper utama pada section ini */}
      {/* Paket halal section */}
            <ScrollabelPackage/>
      {/* penutup wrapper utama section halal trip */}
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginHorizontal:16}}></View>
            <UmraNews/>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginHorizontal:16}}></View>
        </ScrollView>
            <NavBar/>
    </View>
    </>
        )
    }
}

export default Home;
