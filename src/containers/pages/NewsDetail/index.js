import React, { Component } from 'react';
import {Text, StatusBar, View, ScrollView, Image} from 'react-native';
import NavBar from '../../../containers/organisms/NavBar';
import UmraPayFeatures from '../../organisms/UmraPayFeatures';
import SearchFeature from '../../../components/molecules/SearchFeature';

const NewsDetail = () => {
    return(
        <>
    <StatusBar barStyle="white-content" />
    <View style={{flex:1}}>
            <ScrollView style={{flex:1, backgroundColor: 'white'}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../../../assets/dummy/atur-sendiri.jpeg')} style={{height:170, width:'100%'}}></Image>
            </View>
            <View style={{marginHorizontal:17, marginTop:13}}>
                <Text style={{fontSize:14, fontWeight:'100', color:'#878787'}}>Foto: Istimewa</Text>
            </View>
        <View style={{width: '25%', alignItems: 'center', marginBottom:28, flexDirection:'row', marginTop:10, marginHorizontal:16}}>
                <View style={{width: 30, height: 30, borderWidth: 0, flexDirection:'row', borderColor: '#EFEFEF', justifyContent:'center', alignContent:'center', marginRight:-2}}>
                    <Image source={require('../../../assets/icon/fb-icon.png')} style={{width:30, height:30}}></Image>
                </View>
                <View style={{width: 30, height: 30, borderWidth: 0, flexDirection:'row', borderColor: '#EFEFEF', justifyContent:'center', alignContent:'center', marginRight: -2}}>
                    <Image source={require('../../../assets/icon/ig-icon.png')} style={{width:30, height:30}}></Image>
                </View>
                <View style={{width: 30, height: 30, borderWidth: 0, flexDirection:'row', borderColor: '#EFEFEF', justifyContent:'center', alignContent:'center', marginRight: -2}}>
                    <Image source={require('../../../assets/icon/tw-icon.png')} style={{width:30, height:30}}></Image>
                </View>
                <View style={{width: 30, height: 30, borderWidth: 0, flexDirection:'row', borderColor: '#EFEFEF', justifyContent:'center', alignContent:'center', marginRight: -2}}>
                    <Image source={require('../../../assets/icon/wa-icon.png')} style={{width:30, height:30}}></Image>
                </View>
        </View>
        <View style={{marginHorizontal:17,marginBottom:5}}>
            <Text style={{fontSize:18, fontWeight:'bold', color:'#7CB142'}}>UmraBlog</Text>
        </View>
            <View style={{marginHorizontal:17}}>
                <Text style={{fontSize:15, fontWeight: 'bold', fontSize:24}}>Umroh Kini Lebih Mudah</Text>
            </View>
            <View style={{height:24, borderBottomWidth:1, borderBottomColor: '#E8E9ED'}}></View>
            <View style={{marginBottom:18, marginHorizontal:17, marginTop:13}}>
                <Text style={{fontSize:14, color:'#9C9C9C'}}>Ahmad Yahya - UmraBlog</Text>
                <Text style={{fontSize:14, color:'#9C9C9C'}}>Kamis, 16 Januari 2020</Text>
            <View style={{marginTop:18}}>
                <Text>
                Jakarta - Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </View>    
            </View>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom:20}}></View>
            </ScrollView>
            <View style={{height: 54, backgroundColor: 'pink'}}>
                <NavBar/>
            </View>
    </View>

 </>
        
    )
}

export default NewsDetail;