//This is an example code for Bottom Navigation//
import React from 'react';
import {
  Button,
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
//import all the basic component we have used
import Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options

//import React Navigation
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';


///////////////////////////////////////////
import HomeScreen from './pages/HomeScreen';
import StaffScreen from './pages/StaffScreen';
import CustomerScreen from './pages/CustomerScreen';
import ProductsScreen from './pages/ProductsScreen';
import BookingsScreen from './pages/BookingsScreen';
import SearchStaff from './pages/SearchStaff';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    // Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#BA55D3',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
      //Header title
    },
  }
);


const StaffStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Staff: { screen: StaffScreen },
    Search: { screen: SearchStaff },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#BA55D3',
      },
      headerTintColor: '#FFFFFF',
      title: 'STAFF',
      //Header title
    },
  }
);

const CustomerStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Customer: { screen: CustomerScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#BA55D3',
      },
      headerTintColor: '#FFFFFF',
      title: 'CUSTOMER',
      //Header title
    },
  }
);

const ProductsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Products: { screen: ProductsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#BA55D3',
      },
      headerTintColor: '#FFFFFF',
      title: 'PRODUCTS',
      //Header title
    },
  }
);

const BookingsStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Bookings: { screen: BookingsScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#BA55D3',
      },
      headerTintColor: '#FFFFFF',
      title: 'BOOKING',
      //Header title
    },
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Staff: { screen: StaffStack },
    Customer: { screen: CustomerStack },
    Products: { screen: ProductsStack },
    Bookings: { screen: BookingsStack },

  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ?
            '' : '-outline'
            }`;
        } else if (routeName === 'Staff') {
          iconName = `person-circle${focused ?
            '' : '-outline'
            }`;
        } else if (routeName === 'Customer') {
          iconName = `people${focused ?
            '' : '-outline'
            }`;
        } else if (routeName === 'Products') {
          iconName = `cube${focused ?
            '' : '-outline'
            }`;
        } else if (routeName === 'Bookings') {
          iconName = `bookmarks${focused ?
            '' : '-outline'
            }`;
        }

        return <IconComponent
          name={iconName}
          size={25}
          color={tintColor}
        />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF69B4',
      // inactiveTintColor: 'HotPink',
    },
  }
);
export default createAppContainer(App);




