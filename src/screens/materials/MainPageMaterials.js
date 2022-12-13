import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import AddMaterials from './AddMaterials';
import ViewMaterials from './ViewMaterials';
import EditMaterials from './EditMaterials';

const stack = createNativeStackNavigator();
export default function MainPageMaterials() {
  return (
      <stack.Navigator initialRouteName='ViewMaterials'>
        <stack.Screen name="Materials used in Agriculture " component={ViewMaterials} options={{headerShown:false}}/>
        <stack.Screen name="add" component={AddMaterials} options={{headerShown:false}}/>
        <stack.Screen name="Update" component={EditMaterials} options={{headerShown:false}}/>
      </stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});