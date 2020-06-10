import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NavBarItem = (props) => {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity onPress={props.onPress} style={{alignItems:'center'}}>
                <Image style={{width:26, height:26}} source={props.img}></Image>
                <Text style={{fontSize: 10, color: props.active ? '#0c6b67' : '#545454', marginTop: 4}}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavBarItem;