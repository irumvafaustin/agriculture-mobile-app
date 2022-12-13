import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const AddMaterials = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const navigation=useNavigation();
  const createTask = async () =>{
    try{
      const res =await axios.post('http://172.31.42.22:5000/material',{name,type,quantity,price})
      navigation.navigate("Materials used in Agriculture")
      console.log(res.data)
        }catch(error){
      console.log(error)
        }
  }
  
  return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
        <Text style={styles.title}>Add Material</Text>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setName(value)}
          />
          <Text style={styles.label}>Type</Text>
          <TextInput
            style={styles.input}
            multiline
            onChangeText={(value) => setType(value)}
          />
          <Text style={styles.label}>Quantity</Text>
          <TextInput
            style={styles.input}
            multiline
            keyboardType="numeric"
            onChangeText={(value) => setQuantity(value)}
          />
          <Text style={styles.label}>Price</Text>
          <TextInput
            style={styles.input}
            multiline
            keyboardType="numeric"
            onChangeText={(value) => setPrice(value)}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => createTask()} >
            <Text style={{ color: '#222', fontWeight: 'bold' }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  )
}

export default AddMaterials;


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: "95%",
    height: 500,
    marginTop: 30,
    padding: 10,
    borderRadius: 10
  },
  title: {
    textAlign: 'center',
    color: "black",
    fontSize: 25
  },
  formContainer: {
    paddingVertical: 10, paddingHorizontal: 5
  },
  label: {
    paddingVertical: 7,
    color: 'black'
  },
  input: {
    borderWidth: 2,
    borderColor: 'black',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 10
  },
  buttonContainer: {
    backgroundColor: '#496646',
    width: '50%',
    height:40,
    alignSelf: 'center',
    padding: 5,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25
  }
})