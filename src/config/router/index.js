import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home, NewsDetail, Orders, OrderDetail, ScanQRCode, WaktuSholat } from '../../containers/pages';

    
    const WaksolStack = createStackNavigator(
        {
            WaktuSholat
        },
        {
            headerMode: 'none',
            initialRouteName:'WaktuSholat'
        }
    )


    const HomeStack = createStackNavigator(
            {
                // Ini disederhanakan, karena pemanggilan page bisa juga seperti ini atau seperti line 20
                
                Home,
                NewsDetail,
                WaksolStack
            },
            {
                headerMode: 'none',
                initialRouteName: 'Home'
            }
    )

    const OrdersStack = createStackNavigator(
            {
                // Ini disederhanakan, karena pemanggilan page bisa juga seperti ini atau seperti line 20
                
                Orders,
                OrderDetail,
            },
            {
                headerMode: 'none',
                initialRouteName: 'Orders'
            }
    )

    const ScanStack = createStackNavigator(
        {
            ScanQRCode
        },
        {
            headerMode: 'none',
            initialRouteName: 'ScanQRCode'
        }
    )

    const Router = createSwitchNavigator(
            {
                HomeStack,
                OrdersStack,
                ScanStack,
                

            },
            {
                headerMode:'none',
                initialRouteName: 'HomeStack'
            }
    );
  
  export default createAppContainer(Router);