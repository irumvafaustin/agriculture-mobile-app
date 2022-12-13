import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEmployee from './AddEmployee';
import UpdateEmployee from './UpdateEmployee';
import ViewEmployee from './ViewEmployee';
const stack = createNativeStackNavigator();

export default function App() {
  return (
      <stack.Navigator initialRouteName='ViewEmployee'>
        <stack.Screen name="List of Employee" component={ViewEmployee}options={{headerShown:false}} />
        <stack.Screen name="AddEmployee" component={AddEmployee} options={{headerShown:false}}/>
        <stack.Screen name="UpdateEmployee" component={UpdateEmployee}options={{headerShown:false}} />
      </stack.Navigator>
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