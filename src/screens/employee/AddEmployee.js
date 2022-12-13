import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import axios from 'axios';

const AddEmployee = ({navigation}) => {
  const [name,setName] = useState("");
  const [phone,setPhone] = useState(""); 
  const [gender,setGender] = useState("");
  const [position,setPosition] = useState("");
  const [salary,setSalary] = useState("");

  const createEmployee = async () =>{
    try{
      const res =await axios.post('http://172.31.42.22:5000/employee',{name,phone,gender,position,salary})
      console.log(res.data)
        }catch(error){
      console.log(error)
        }
  }
  
  return (
    
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Add Employee</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setName(value)}
          />
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            multiline
            keyboardType="numeric"
            onChangeText={(value) => setPhone(value)}
          />
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            multiline
            onChangeText={(value) => setGender(value)}
          />
          <Text style={styles.label}>Position</Text>
          <TextInput
            style={styles.input}
            multiline
            onChangeText={(value) => setPosition(value)}
          />
          <Text style={styles.label}>Salary</Text>
          <TextInput
            style={styles.input}
            multiline
            keyboardType="numeric"
            onChangeText={(value) => setSalary(value)}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => createEmployee()} >
            <Text style={{ color: '#222', fontWeight: 'bold' }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
  )
}

export default AddEmployee;


const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: "95%",
    height: 900,
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
    height:50,
    alignSelf: 'center',
    padding: 5,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25
  }
})