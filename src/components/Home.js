import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SignUp from '../screens/auth_screen/SignUp';

import { Toast } from 'react-native-toast-message/lib/src/Toast';
import HomeScreen from '../screens/homescreen/HomeScreen';
import SettingScreen from '../screens/setting/SettingScreen';
import MyCart from '../screens/product/MyCart';
import ProductInfo from '../screens/product/ProductInfo';
import ProductOrder from '../screens/product/ProductOrder';
import EmployeeScreen from '../screens/employee/EmployeeScreen';
import MainPageMaterials from '../screens/materials/MainPageMaterials';
import Post from '../screens/post/Post';
import CustomerPage from '../screens/customers/CustomerPage';
import PaymentComponent from '../screens/product/PaymentComponent';
import ProductScreen from '../screens/product/ProductScreen';
const Drawer = createDrawerNavigator();

export default function Home() {
  return (
  <>
      <Drawer.Navigator initialRouteName="Admin Panel">
        <Drawer.Screen name="Admin Panel" component={HomeScreen} />
        <Drawer.Screen name="Payment" component={PaymentComponent} />
        <Drawer.Screen name="SignUp" component={SignUp} />
        <Drawer.Screen name="Employee" component={EmployeeScreen} />
        <Drawer.Screen name="Setting & Support" component={SettingScreen}/>
        <Drawer.Screen name='ProScreen' component={ProductScreen} />
        <Drawer.Screen name='Materials' component={MainPageMaterials} />
        <Drawer.Screen name='Post' component={Post} />
        <Drawer.Screen name='Customer' component={CustomerPage}/>
      </Drawer.Navigator>
    <Toast/>
    </>
  );
}





