import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import ViewEmployee from './ViewEmployee';

const  UpdateEmployee = ({route,navigation}) => {
  const [fetchedTask,setFetchedTask ] = useState();
  const [name,setName] = useState(route.params.name);
  const [phone,setPhone] = useState(route.params.phone); 
  const [gender,setGender] = useState(route.params.gender2);
  const [position,setPosition] = useState(route.params.position);
  const [salary,setSalary] = useState(route.params.salary);
  const id= route.params.id 
  console.log(id);
  const getSingleTask = async() =>{
    try{
      const res =await axios.post('http://192.168.1.65:5000/${id}',{name,phone,gender,position,salary})
      setFetchedTask(res.data);
      console.log(res.data)
        }catch(error){
      console.log(error)
        }
  };

  const updateSingleTask = async () =>{
    try{
      const res =await axios.post('http://172.31.42.22:5000/updateemployee',{name,phone,gender,position,salary,id})
      
      navigation.navigate('ViewEmployee');
        }catch(error){
      console.log(error)
        }
  }


  useEffect(() =>{
    getSingleTask();
  })
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Update Employee</Text>
          <View key={id}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
               />
              <Text style={styles.label}>Phone</Text>
              <TextInput style={styles.input} 
              value={phone}
              keyboardType="numeric"
              onChangeText={(value) => setPhone(value)}
              />
              <Text style={styles.label}>Gender</Text>
              <TextInput style={styles.input} 
              value={gender}
              onChangeText={(value) => setGender(value)}
              />
              <Text style={styles.label}>Position</Text>
              <TextInput style={styles.input} 
              value={position}
              onChangeText={(value) => setPosition(value)}
              />
              <Text style={styles.label}>Salary</Text>
              <TextInput style={styles.input} 
              value={salary}
              keyboardType="numeric"
              onChangeText={(value) => setSalary(value)}
              />
              <TouchableOpacity style={styles.buttonContainer} onPress={updateSingleTask} >
            <Text style={{ color: '#222', fontWeight: 'bold' }}>Update</Text>
          </TouchableOpacity>
          </View>

      </View>
      </ScrollView>
    )
}

export default UpdateEmployee;

const styles = StyleSheet.create({
  container:{
    width:"90%",
    alignSelf:"center",
    borderRadius:8,
    marginTop:20,
    padding:10,
    height:600
  },
  title:{
    color:"black",
    fontSize:20,
    fontWeight:'bold'
  },
  label: {
    paddingVertical: 7,
    color: 'black'
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 5,
    color:'black'
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