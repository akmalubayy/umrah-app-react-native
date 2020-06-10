import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import NavBar from '../../organisms/NavBar';
import {ScrollView} from 'react-native-gesture-handler';
import axios from 'axios';

// const ActionButton = (props) => {
//     return(
//         <View>
//                 <View style={{width:40, height:40, borderRadius:40, backgroundColor:'white', justifyContent:'center'}}>
//                     <Image source={props.img} style={{width:20, height:15, alignSelf:'center'}}/>
//                 </View>
//                 <View>
//                     <Text>{props.text}</Text>
//                 </View>
//         </View>
//     )
// }

// const WaktuSholat = () => {
//     return(
//         <View>
//             <View style={{flexDirection:'row', paddingHorizontal:17, justifyContent:'space-between', marginTop:17}}>
//                 {/* <Button title="Go To Detail" onPress={() => props.navigation.navigate('Home')}/> */}
//                     <ActionButton text="lala"/>
//                     <View style={{flexDirection:'row', justifyContent:'space-between', width:90}}>
//                         <ActionButton/>
//                         <ActionButton/>
//                     </View>
//                 </View>
//         </View>
//     )
// }

class TimePray extends Component {
  constructor() {
    super();
    this.state = {
      waktuSholat: {},
      Today: {},
    };
  }

  async componentDidMount() {
    console.log('0----- ini mau dipasang');
    //   const url ='http://localhost:8008/portal/1/asDow98ROujMSrGRhkL1Nf3MnpqoY8oS'
    const url =
      'https://muslimsalat.com/jakarta/daily.json?key=ab3d635c9b674b02cccef847eaf2cb94';
    axios.get(url).then(data => {
      console.log(data);
      this.setState({
        waktuSholat: data.data.items[0],
        Today: data.data,
      });
      console.log(this.state.Today);
      //    console.log(this.state.waktuSholat)
    });
  }
  render() {
    // console.log(this.state.waktuSholat)
    console.log('2----- ini sedang dipasang');
    return (
      <>
        <View sty le={{flex: 1}}>
          <ScrollView>
            <View
              style={{
                height: 50,
                backgroundColor: '#097132',
                position: 'relative',
              }}>
              <View style={{flex: 1, marginHorizontal: 17, marginTop: 5}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {this.state.Today.state}
                </Text>
                <Text style={{color: 'white', fontWeight: '300'}}>
                  {this.state.Today.country}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignSelf: 'flex-end',
                  marginHorizontal: 17,
                  marginBottom: 25,
                }}>
                <View
                  style={{
                    width: 20,
                    marginRight: 5,
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: 'white',
                  }}
                />
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                    backgroundColor: 'white',
                  }}
                />
              </View>
            </View>
            <View style={{height: 152}}>
              <Image
                source={require('../../../assets/dummy/masjid.jpg')}
                style={{height: 152, width: '100%'}}
              />
            </View>
            <View>
              <View
                style={{
                  height: 50,
                  backgroundColor: 'grey',
                  position: 'relative',
                }}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 25,
                    marginTop: 10,
                  }}>
                  <View
                    style={{width: 30, height: 30, backgroundColor: 'blue'}}
                  />
                  <View
                    style={{width: 30, height: 30, backgroundColor: 'blue'}}
                  />
                </View>
                <View
                  style={{
                    marginHorizontal: 17,
                    alignItems: 'center',
                    position: 'absolute',
                    marginTop: 12,
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {this.state.waktuSholat.date_for}
                  </Text>
                </View>
              </View>
            </View>
            <SectionWaktu text="Fajar" time={this.state.waktuSholat.fajr} />
            <SectionWaktu
              text="Matahari Terbit"
              time={this.state.waktuSholat.shurooq}
            />
            <SectionWaktu text="Dzuhur" time={this.state.waktuSholat.dhuhr} />
            <SectionWaktu text="Asar" time={this.state.waktuSholat.asr} />
            <SectionWaktu text="Magrib" time={this.state.waktuSholat.maghrib} />
            <SectionWaktu text="Isya" time={this.state.waktuSholat.isha} />
          </ScrollView>
          <NavBar />
        </View>
      </>
    );
  }
}

const SectionWaktu = props => {
  return (
    <View>
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>{props.text}</Text>
        <Text style={{fontSize: 20}}>{props.time}</Text>
      </View>
      <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1}} />
    </View>
  );
};

const WaktuSholat = props => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            height: 50,
            backgroundColor: '#097132',
            position: 'relative',
          }}>
          <View style={{flex: 1, marginHorizontal: 17, marginTop: 5}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Kecamatan Pesanggrahan
            </Text>
            <Text style={{color: 'white', fontWeight: '300'}}>
              KEMENAG Jakarta Selatan
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignSelf: 'flex-end',
              marginHorizontal: 17,
              marginBottom: 25,
            }}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                backgroundColor: 'white',
                marginRight: 5,
              }}
            />
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 20,
                backgroundColor: 'white',
              }}
            />
          </View>
        </View>
        <View style={{height: 152}}>
          <Image
            source={require('../../../assets/dummy/masjid.jpg')}
            style={{height: 152, width: '100%'}}
          />
        </View>
        <View>
          <View
            style={{height: 50, backgroundColor: 'grey', position: 'relative'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 25,
                marginTop: 10,
              }}>
              <View style={{width: 30, height: 30, backgroundColor: 'blue'}} />
              <View style={{width: 30, height: 30, backgroundColor: 'blue'}} />
            </View>
            <View
              style={{
                marginHorizontal: 17,
                alignItems: 'center',
                position: 'absolute',
                marginTop: 12,
                alignSelf: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Selasa, 21 Januari
              </Text>
            </View>
          </View>
        </View>
        <SectionWaktu text="Imasak" time={this.state.waktuSholat.shurooq} />
        <SectionWaktu text="Fajar" time="04.20" />
        <SectionWaktu text="Matahari Terbit" time="05.48" />
        <SectionWaktu text="Dzuhur" time="12.07" />
        <SectionWaktu text="Asar" time="15.30" />
        <SectionWaktu text="Magrib" time="18.20" />
        <SectionWaktu text="Isya" time="19.33" />
      </ScrollView>
      <NavBar />
    </View>
  );
};

export default TimePray;
