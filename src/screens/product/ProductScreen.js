import { StyleSheet} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import ProductOrder from './ProductOrder';
import MyCart from './MyCart';
import PaymentComponent from './PaymentComponent';
import Payment from './Payment';
import ProductInfo from './ProductInfo';


const Drawer = createDrawerNavigator();
export default function ProductScreen() {
  return (
      <Drawer.Navigator initialRouteName='BuyProduct'>
        <Drawer.Screen name="proOrder" component={ProductOrder}/>
        <Drawer.Screen name="Cart" component={MyCart} options={{headerShown:false}}/>
        <Drawer.Screen name="PayComponent " component={PaymentComponent} options={{headerShown:false}}/>
        <Drawer.Screen name="pay" component={Payment} options={{headerShown:false}}/>
        <Drawer.Screen name="producti" component={ProductInfo} options={{headerShown:false}}/>
      </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});