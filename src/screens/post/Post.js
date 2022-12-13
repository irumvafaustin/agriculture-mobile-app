import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPost from './AddPost';
import ViewPost from './ViewPost';
const stack = createNativeStackNavigator();

export default function Post() {
  return (
    
      <stack.Navigator initialRouteName='Post'>
        <stack.Screen name="Main post page " component={AddPost}options={{headerShown:false}} />
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