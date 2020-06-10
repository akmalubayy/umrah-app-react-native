import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Router from './src/config/router'
import 'react-native-gesture-handler';
import axios from 'axios';

// class TimePray extends Component{

//   constructor(){
//     super()
//     this.state = {
//       waktuSholat : {},
//       }
//   }
  
//   async componentDidMount(){
//     console.log('0----- ini mau dipasang')
//     const url ='https://muslimsalat.com/jakatra/daily.json?key=06e96bcffa96c84c0ad93e046402b85a'
//     axios.get(url)
//     .then((data) => {
//       console.log(data.data)
//       this.setState({
//         waktuSholat : data.data.items[0],
//      })
//      console.log(this.state.waktuSholat)
//   })
// }
//   render(){
//     // console.log(this.state.waktuSholat)
//     console.log('2----- ini sedang dipasang')
//     return(
//     <>
//       <View style={styles.list}>
//                   <View style={styles.listInfo}>
//                     <Text style={styles.listText}>Subuh</Text>
//                   </View>
//                   <Text style={styles.listValue}> {this.state.waktuSholat.shurooq} </Text>
//               </View>
//               <View style={styles.list}>
//                   <View style={styles.listInfo}>
//                     <Text style={styles.listText}>Dzuhur</Text>
//                   </View>
//                   <Text style={styles.listValue}> {this.state.waktuSholat.dhuhr} </Text>
//               </View>
//               <View style={styles.list}>
//                   <View style={styles.listInfo}>
//                     <Text style={styles.listText}>Ashar</Text>
//                   </View>
//                   <Text style={styles.listValue}> {this.state.waktuSholat.asr} </Text>
//               </View>
//               <View style={styles.list}>
//                   <View style={styles.listInfo}>
//                     <Text style={styles.listText}>Maghrib</Text>
//                   </View>
//                   <Text style={styles.listValue}> {this.state.waktuSholat.maghrib} </Text>
//               </View>
//               <View style={styles.list}>
//                   <View style={styles.listInfo}>
//                     <Text style={styles.listText}>Isya</Text>
//                   </View>
//                   <Text style={styles.listValue}> {this.state.waktuSholat.isha} </Text>
//               </View>
//     </>
              
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor : '#40898f',
//     flex: 1,
//   },
//   logo: {
//     color: 'white',
//     fontSize: 80,
//     marginTop: 80
//   },
//   header:{
//     alignItems: 'center',
//     marginBottom: 40,
//     flex: 2
//   },
//   headerText: {
//     marginTop: 20,
//     color: 'white',
//     fontSize: 20
//   },
//   headerDesc: {
//     color: 'white',
//     fontSize: 10,
//     textAlign: 'center'
//   },
//   content: {
//     backgroundColor: '#393e42',
//     flex: 2,
//   },
//   contentLoading: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   list: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#3f444a',
//     padding: 15,
//     flex: 1,
//     flexDirection: 'row',
//   },
//   listInfo: {
//     flex:3
//   },
//   listText: {
//     color: 'black',
//     fontSize: 20,
// },
//   listDesc: {
    
//   },
//   listValue: {
//     flex: 1,
//     color: 'black',
//     fontWeight: '200',
//     fontSize: 20,
//     marginLeft: -10,

//   }
// })



class App extends Component {
  render() {
    return (
  //   return (const App: () => React$Node = () => {
  // return (
    <>
    <Router/>
    </>
    );
  }
}

export default App;
