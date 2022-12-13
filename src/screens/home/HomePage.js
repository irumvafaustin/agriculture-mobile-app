import * as React from 'react';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from '../../screens/auth_screen/Login';
import HomeScreen from '../homescreen/HomeScreen';
import {Ionicons} from 'react-native-vector-icons';
import { Entypo } from '@expo/vector-icons';
const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
  <>
      
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:(color)=>(<Ionicons name="home" size={23}color="white"/>)}} />
      <Tab.Screen name="Login" component={Login} options={{tabBarIcon:(color)=>(<Entypo name="login" size={24} color="white" />)}} />
      {/* <Tab.Screen name="Login" component={Login} /> */}
    </Tab.Navigator>
    
    <Toast/>
    </>
  );
}