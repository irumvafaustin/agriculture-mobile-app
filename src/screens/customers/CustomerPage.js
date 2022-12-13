import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import Customer from './Customer';
import UpdateCustomer from './UpdateCustomer';


const stack = createNativeStackNavigator();
export default function MainPageMaterials() {
  return (
      <stack.Navigator initialRouteName='Customer'>
        <stack.Screen name="Materials used in Agriculture " component={Customer} options={{headerShown:false}} />
        <stack.Screen name="Update" component={UpdateCustomer} options={{headerShown:false}}/>
      </stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});