import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import QRCode from 'react-native-qrcode'; // 0.2.6

export default class CheckOut extends Component{
  
  
  constructor(props) {
    super(props);
    this.state = {itemData: this.props.navigation.state.params.param};
   //console.log(this.state.itemData);
  }
  static navigationOptions = {
    title: 'CheckOut',
  };
  render() {
     return (
      <View style={styles.container}>
      <View style={styles.div}>
      <Text></Text>
      <Text></Text>
     <Text style={styles.textStyle}>Please scan the QR code at KIOSK</Text>
     
     <Text></Text>
     <Text></Text>
     <Text></Text>
     <Text></Text>
       <QRCode
          value={JSON.stringify(this.state.itemData)}
          size={200}
          bgColor='green'
          fgColor='white'/> 
        
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    textStyle: {
      marginTop: 9,
      marginBottom: 10,
      fontSize: 19,
      width: 200
    },
    div: {
      alignItems: 'center',
      borderColor: 'black',
        borderWidth: 1,
        width: 300,
        height: 500
    }
 
   
});