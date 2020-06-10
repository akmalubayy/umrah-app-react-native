import React, { Component } from 'react';
import {View} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';
import { withNavigation } from 'react-navigation';

class HomeMainFeatures extends Component {
    render(){
        return(
            <View style={{flexDirection:'row', flexWrap: 'wrap',marginTop: 18}}>
            <View style={{justifyContent: 'space-between', flexDirection:'row', width:'100%', flexWrap: 'wrap'}}>
              <MainFeature title="UMROH" 
                  img={require('../../../assets/icon/umroh-icon.png')}/>
              <MainFeature title="HOTEL" 
                  img={require('../../../assets/icon/hotel-icon.png')}/>
              <MainFeature title="PENERBANGAN"
                  img={require('../../../assets/icon/penerbangan-icon.png')}/>
              <MainFeature title="TRAVEL" 
                  img={require('../../../assets/icon/traveler-icon.png')}/>
              <MainFeature onPress={() => this.props.navigation.navigate('WaktuSholat')} title="SHOLAT" 
                  img={require('../../../assets/icon/waktu-icon.png')}/>
              <MainFeature title="KIBLAT" 
                  img={require('../../../assets/icon/kiblat-icon2.png')}/>
              <MainFeature title="QUR'AN"
                  img={require('../../../assets/icon/quran-icon.png')}/>
              <MainFeature title="LAINNYA"
                  img={require('../../../assets/icon/lainnya-icon.png')}/>
          </View>
            </View>
        )
    }
}

export default withNavigation (HomeMainFeatures);