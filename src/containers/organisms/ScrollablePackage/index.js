import React, {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native'; 
import ScrollableItem from '../../../components/molecules/ScrollableItem';

class ScrollabelPackage extends Component {
    render() {
        return(
            //Wrapper pembuka pada section halal trip
            <View>
              <View style={{height:15, width:55, marginLeft:15}}>
                <Image source={require('../../../assets/dummy/umralog.png')} style={{width:undefined, height:undefined, resizeMode: 'contain', flex:1}}></Image>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom:16, paddingHorizontal:16}}>
                <Text style={{fontSize:17, fontWeight: 'bold', color: '#1C1C1C'}}>Halal Trip</Text>
                <Text style={{fontSize:15, fontWeight: 'bold', color: '#0d6c68'}}>See All</Text>
              </View>
              {/* View Untuk pilihan halal trip */}
              <ScrollView horizontal style={{flexDirection:'row', paddingLeft:16}}>
                <ScrollableItem title="Halal Trip Turki"
                                    img={require('../../../assets/dummy/trip1.jpg')}
                />
                <ScrollableItem title="Halal Trip Russia"
                                    img={require('../../../assets/dummy/trip2.jpg')}
                />
                <ScrollableItem title="Halal Trip Jepang"
                                    img={require('../../../assets/dummy/trip3.jpg')}
                />
                <ScrollableItem title="Halal Trip Uzbek"
                                    img={require('../../../assets/dummy/trip4.jpg')}
                />
                <ScrollableItem title="Halal Trip Europa"
                                    img={require('../../../assets/dummy/trip5.jpg')}
                />
              </ScrollView>
          </View>
        )
    }
}

export default ScrollabelPackage;