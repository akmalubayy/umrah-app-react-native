import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const InformationFeature = () => {
    return(
            //Wrapper utama information section
            <View style={{padding:16, paddingBottom:0}}>
              <View style={{height:15, width:55}}>
                <Image source={require('../../../assets/dummy/umralog.png')} style={{width:undefined, height:undefined, resizeMode: 'contain', flex:1}}></Image>
              </View>
              <Text style={{fontSize:17, fontWeight: 'bold', color: '#1C1C1C', marginTop:15, marginBottom:20}}>Complete Your Profile</Text>
              <View style={{flexDirection:'row', marginBottom:16}}>
                <View>
                  <Image source={require('../../../assets/dummy/facebook-connect.png')}/>
                </View>
                <View style={{marginLeft: 16, flex:1}}>
                  <Text style={{fontSize:15, fontWeight:'bold', color: '#4A4A4A'}}>Connect With Facebook</Text>
                  <Text style={{fontSize:15, fontWeight: 'normal', color: '#4A4A4A', width: '70%'}}>Log in Faster Without Verification Code</Text>
                </View>
              </View>
                <TouchableOpacity style={{backgroundColor: '#0d6c68', paddingHorizontal: 12, paddingVertical:11, alignSelf: 'flex-end', borderRadius: 4}}>
                  <Text style={{fontSize:14, color: 'white', fontWeight: 'bold', textAlign: 'center'}}>CONNECT</Text>
                </TouchableOpacity>
                <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16}}></View>
              </View>
    )
}

export default InformationFeature;