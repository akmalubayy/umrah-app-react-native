import React from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';

const UmraNews = ({onPress}) => {
    return(
        //Wrapper Utama / Pembuka Wrapper Section News 
        <View style={{paddingTop:16, paddingHorizontal: 16}}>
            <View style={{position:'relative'}}>
                    <Image source={require('../../../assets/dummy/banner-atur.jpeg')} style={{height:170, width:'100%', borderRadius:6}}></Image>
                <View style={{width:'100%', height: '100%', position:'absolute', top:0, left:0, backgroundColor:'black', opacity: 0.1, borderRadius:6}}>
                </View>
                <View style={{height:15, width:55, position: 'absolute', top: 16, left: 16}}>
                    <Image source={require('../../../assets/dummy/umralog.png')} style={{width:undefined, height:undefined, resizeMode: 'contain', flex:1}}></Image>
                </View>
            </View>
            <View style={{paddingTop:16, paddingBottom:20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1}}>
                    <Text style={{fontSize:16, fontWeight:'bold', color:'#1C1C1C'}}>UMRA BLOG</Text>
                    <Text style={{fontSize:14, fontWeight: 'normal', color: '#7A7A7A', marginBottom:11}}>Ini Isi Content UMRA BLOG adalah aplikasi DIy untuk menjalankan ibadah umroh</Text>
                <TouchableOpacity style={{backgroundColor: '#0d6c68', paddingHorizontal: 12, paddingVertical:11, alignSelf: 'flex-end', borderRadius: 4}} onPress={onPress}>
                    <Text style={{fontSize:14, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>READ</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UmraNews;