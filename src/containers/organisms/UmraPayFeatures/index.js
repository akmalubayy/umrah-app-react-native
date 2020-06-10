import React, { Component } from 'react';
import {View, Text, Image} from 'react-native';
import PayFeature from '../../../components/molecules/PayFeatures';
import { withNavigation } from 'react-navigation';

class UmraPayFeatures extends Component {
    render(){ 
        return(
            <View style={{marginHorizontal:17, marginTop: 8 }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FBB', borderTopLeftRadius: 4, borderTopRightRadius:4, padding: 14}}>
                  <Image source={require('../../../assets/icon/umrapay-iconw.png')}/>
                  <Text style={{fontSize:17, fontWeight: 'bold', color: 'white'}}>Rp. 50.000</Text>
                </View>
                <View style={{flexDirection:'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2F65BD', borderBottomLeftRadius:4, borderBottomRightRadius: 4}}>
      {/* Menggunakan stateless component dan Props */}
                  <PayFeature onPress={() => this.props.navigation.navigate('ScanQRCode')} title="Pay" img={require('../../../assets/icon/pay-icon.png')}/>
                  <PayFeature title="Transfer" img={require('../../../assets/icon/tf-icon.png')}/>
                  <PayFeature title="Top Up" img={require('../../../assets/icon/topup-icon.png')}/>
                  <PayFeature title="More"img={require('../../../assets/icon/pay-more-icon.png')}/>
                </View>
              </View>
        )
    }
}

export default withNavigation (UmraPayFeatures);