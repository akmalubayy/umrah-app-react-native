import React from 'react';
import {Text, View, Image, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const IconWithText = (props) => {
    return (
        <View style={{alignItems: 'center'}}>
            <View style={{width:60, height:60, borderRadius:60, backgroundColor: 'green', marginTop:10, alignContent:'center', justifyContent:'center'}}>
            <Image source={props.img} style={{width:30, height:30, alignSelf:'center'}}/>
            </View>
    <Text style={{maxWidth:70, textAlign:'center', marginTop:10}}>{props.title}</Text>
        </View>
    )
}

const IconAction = (props) => {
    return(
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <View style={{width:40, height:40, borderRadius:40, backgroundColor:'white', justifyContent:'center'}}>
                    <Image source={props.img} style={{width:20, height:15, alignSelf:'center'}}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const ScanQRCode = (props) => {
    return(
        <View style={{flex:1}}>
            <View style={{flex:1, backgroundColor:'grey'}}>
                <View style={{flexDirection:'row', paddingHorizontal:17, justifyContent:'space-between', marginTop:17}}>
                {/* <Button title="Go To Detail" onPress={() => props.navigation.navigate('Home')}/> */}
                    <IconAction onPress={() => props.navigation.navigate('Home')} img={require('../../../assets/icon/back-icon.png')}/>
                    <View style={{flexDirection:'row', justifyContent:'space-between', width:90}}>
                        <IconAction/>
                        <IconAction/>
                    </View>
                </View>
            </View>
            <View style={{height:200, backgroundColor: 'white', paddingHorizontal:17}}>
                <View style={{alignItems:'center', marginTop:8, marginBottom:18}}>
                    <View style={{width:45, height:4, backgroundColor: '#E0E0E0', marginVertical:1}}/>
                    <View style={{width:45, height:4, backgroundColor: '#E0E0E0', marginVertical:1}}/>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>More Options</Text>
                    <View style={{width:20, height:20, borderRadius:20, backgroundColor:'green', marginLeft:120}}/>
                    <Text style={{fontSize:14, fontWeight:'bold', color: 'green'}}>SHORTCUT</Text>
                </View>
                {/* <View style={{flexDirection:'row', flexWrap: 'wrap',marginTop: 18}}>
            <View style={{justifyContent: 'space-between', flexDirection:'row', width:'100%', flexWrap: 'wrap'}}> */}
                <View style={{flexDirection:'row', alignItems: 'flex-start', marginTop:14, width:'100%'}}>
                    <View style={{flexDirection:'row', alignItems:'flex-start', width:170, justifyContent:'space-between', paddingRight:12}}>
                        <IconWithText title='Phone Number' img={require('../../../assets/icon/qr-icon.png')}/>
                        <IconWithText title='Pay Code'/>
                    </View>
                    <View style={{width:1, height:60, backgroundColor:'grey'}}/>
                    <View style={{flex:1 ,paddingLeft:12}}>
                        <Text>Your Recent UmraPay receivers will show here. No admin fees!</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ScanQRCode;
