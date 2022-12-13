import React from 'react';
import { Text, Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../styles/color';


const MainButton = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'skyblue',
    marginTop: 12.0,
    elevation: 5,
    width:"100%",
    fontSize:30
  },
  container: {
    width: 300,
    marginLeft:50,
  },
  buttonText: {
    color: colors.button,
    fontWeight: "bold",
  }
})
export default MainButton;