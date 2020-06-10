import React, { Component } from 'react';
import {View} from 'react-native';
import NavBarItem from '../../../components/molecules/NavBarItem';
import { withNavigation } from 'react-navigation';

class NavBar extends Component {
    render(){
        return(
            <View style={{height:54, flexDirection: 'row', backgroundColor: 'white', borderTopWidth:1, borderTopColor: '#E8E9ED'}}>
              <NavBarItem onPress={() => this.props.navigation.navigate('Home')} title="Home" 
                          img={require('../../../assets/icon/home-icon-active.png')} active/>
              <NavBarItem onPress={() => this.props.navigation.navigate('')} title="Umrah" 
                          img={require('../../../assets/icon/travel-icon.png')}/>
              <NavBarItem onPress={() => this.props.navigation.navigate('Orders')} title="Pesanan" 
                          img={require('../../../assets/icon/task-icon.png')}/>
              <NavBarItem onPress={() => this.props.navigation.navigate('')} title="Asuransi" 
                          img={require('../../../assets/icon/love-icon.png')}/>
              <NavBarItem onPress={() => this.props.navigation.navigate('')} title="Sign In" 
                          img={require('../../../assets/icon/user-icon.png')}/>
            </View>
        )
    }
}

export default withNavigation(NavBar);