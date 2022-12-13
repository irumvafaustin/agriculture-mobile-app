import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Customer from './Customer';

const  UpdateCustomer = ({route,navigation}) => {
  const [fetchedTask,setFetchedTask ] = useState();
  const [name,setName] = useState(route.params.name);
  const [gender,setGender] = useState(route.params.gender); 
  const [phone,setPhone] = useState(route.params.phone);
  const [email,setEmail] = useState(route.params.email);
  const userid= route.params.userid 
  console.log(userid);
  const getSingleTask = async() =>{
    try{
      const res =await axios.post('http://172.31.42.22:5000/${userid}',{name,gender,phone,email})
      setFetchedTask(res.data);
      console.log(res.data)
        }catch(error){
      console.log(error)
        }
  };

  const updateSingleTask = async () =>{
    try{
      const res =await axios.post('http://172.31.42.22:5000/updateusers',{name,gender,phone,email,id})
      
      navigation.navigate('Customer');
        }catch(error){
      console.log(error)
        }
  }


  useEffect(() =>{
    getSingleTask();
  },[])
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Update User</Text>
          <View key={userid}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
               />
              <Text style={styles.label}>Gender</Text>
              <TextInput style={styles.input} 
              value={gender}
              onChangeText={(value) => setGender(value)}
              />
              <Text style={styles.label}>Phone</Text>
              <TextInput style={styles.input} 
              value={phone}
              onChangeText={(value) => setPhone(value)}
              />
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.input} 
              value={email}
              onChangeText={(value) => setEmail(value)}
              />
              <TouchableOpacity style={styles.buttonContainer} onPress={updateSingleTask} >
            <Text style={{ color: '#222', fontWeight: 'bold' }}>Update</Text>
          </TouchableOpacity>
          </View>

      </View>
    )
}

export default UpdateCustomer;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#E0FFFF",
    width:"90%",
    alignSelf:"center",
    borderRadius:8,
    marginTop:20,
    padding:10
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
    borderColor: '#fff',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 5,
    color:'black'
  },
  buttonContainer: {
    backgroundColor: 'pink',
    width: '40%',
    alignSelf: 'center',
    padding: 5,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25
  }
})