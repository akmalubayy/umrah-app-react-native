import React from 'react';
import {View, Text, Image} from 'react-native';
import { TouchableWithoutFeedback  } from 'react-native-gesture-handler';

const MainFeature = (props) => {
    return(
        <View style={{width:'25%', alignContent:'center', alignItems: 'center', marginBottom:18}}>
            <TouchableWithoutFeedback onPress={props.onPress} style={{alignItems:'center'}}>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent:'center', alignContent:'center'}}>
                    <Image source={props.img}/>
                </View>
                    <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>{props.title}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default MainFeature;