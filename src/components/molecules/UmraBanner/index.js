import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const UmraBanner = (props) => {
    return(
        //Wrapper Utama / Pembuka Wrapper Section Banner
      <View style={{padding: 16}}>
        <View style={{position:'relative'}}>
                <Image source={props.img} style={{height:170, width:'100%', borderRadius:6}}></Image>
              <View style={{width:'100%', height: '100%', position:'absolute', top:0, left:0, backgroundColor:'black', opacity: 0.15, borderRadius:6}}></View>
              <View style={{height:15, width:55, position: 'absolute', top: 16, left: 16}}>
                <Image source={props.imglogo} style={{width:undefined, height:undefined, resizeMode: 'contain', flex:1}}></Image>
            </View>
            <View style={{position:'absolute', bottom:0, left:0, width:'100%', flexDirection:'row', alignItems:'center', paddingHorizontal:16, paddingBottom:16}}>
              <View style={{flex:1}}>
                <Text style={{fontSize:18,color: 'white', fontWeight: 'bold', marginBottom:8}}>{props.title}</Text>
                <Text style={{fontSize:12, color: 'white', fontWeight:'500'}}>Segera Dapatkan!</Text>
              </View>
            <View>
                  <TouchableOpacity style={{backgroundColor: '#0d6c68', paddingHorizontal: 12, paddingVertical:11, alignSelf: 'stretch', borderRadius: 4}}>
                  <Text style={{fontSize:14, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>GET VOUCHER</Text>
                  </TouchableOpacity>
            </View>
          </View>
        </View>
            <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16}}></View>
      </View>
    )
}

export default UmraBanner;