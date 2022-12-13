
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

// screens
import HomePage from './src/screens/home/HomePage';
import SignUp from './src/screens/auth_screen/SignUp';
import EmployeeScreen from './src/screens/employee/EmployeeScreen';
import MyCart from './src/screens/product/MyCart';
import ProductScreen from './src/screens/product/ProductScreen';
import ProductInfo from './src/screens/product/ProductInfo';
import ProductOrder from './src/screens/product/ProductOrder';
import MainPageMaterials from './src/screens/materials/MainPageMaterials';
import Post from './src/screens/post/Post';
import CustomerPage from './src/screens/customers/CustomerPage';
import Home from './src/components/Home';
import Payment from './src/screens/product/Payment';

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='HomePage'>
       <stack.Screen name='Payment' component={Payment}/> 
       <stack.Screen name="HomePage" component={HomePage} />
       <stack.Screen name='Welcome' component={Home} options={{headerShown:false}}/>
        <stack.Screen name="SignUp" component={SignUp} />
        <stack.Screen name="Employee" component={EmployeeScreen} />
        <stack.Screen name='ProductScreen' component={ProductScreen} options={{headerShown:false}} />
        <stack.Screen name='MyCart' component={MyCart} />
        <stack.Screen name='ProductInfo' component={ProductInfo} />
        <stack.Screen name="ProductOrder" component={ProductOrder}/> 
        <stack.Screen name='Materials' component={MainPageMaterials} />
        <stack.Screen name='Post' component={Post} />
        <stack.Screen name='Customer' component={CustomerPage}/>
      </stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



