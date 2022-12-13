import React, { Component } from 'react';
import { Text, View, StyleSheet, Container } from 'react-native';

export default class AddCart extends Component {
 
 
 static navigationOptions =  {
    title: 'AddCart',
    headerLeft: null
};
 state= {
   item: 0
 };
 
 componentDidMount() {
   this._updateState();
  }
  
  _updateState()
  {
    let i = this.state.item+this.props.navigation.state.params.param
    this.setState({item: i});
  }
 
 render(){
   return(

     <View style={styles.container}>
     <Text>Total Item{this.state.item}</Text>
     </View>

     );
 } 
}
const styles= StyleSheet.create({
  
  container: {
    textAlign: 'center',
  }
  
});

