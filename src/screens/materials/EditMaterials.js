import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import ViewMaterials from './ViewMaterials';

const  EditMaterials = ({route,navigation}) => {
  const [fetchedTask,setFetchedTask ] = useState();
  const [name,setName] = useState(route.params.name);
  const [type,setType] = useState(route.params.type); 
  const [quantity,setQuantity] = useState(route.params.quantity2);
  const [price,setPrice] = useState(route.params.price);
  const id= route.params.id 
  console.log(id);
  const getSingleTask = async() =>{
    try{
      const res =await axios.post('http://192.168.1.65:5000/${id}',{name,type,quantity,price})
      setFetchedTask(res.data);
      console.log(res.data)
        }catch(error){
      console.log(error)
        }
  };

  const updateSingleTask = async () =>{
    try{
      const res =await axios.post('http://172.31.42.22:5000/updatematerial',{name,type,quantity,price,id})
      
      navigation.navigate('ViewMaterials');
        }catch(error){
      console.log(error)
        }
  }


  useEffect(() =>{
    getSingleTask();
  },[])
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Update Material</Text>
          <View key={id}>
              <Text style={styles.label}>Name</Text>
              <TextInput style={styles.input}
              value={name}
              onChangeText={(value) => setName(value)}
               />
              <Text style={styles.label}>Type</Text>
              <TextInput style={styles.input} 
              value={type}
              onChangeText={(value) => setType(value)}
              />
              <Text style={styles.label}>Quantity</Text>
              <TextInput style={styles.input} 
              value={quantity}
              keyboardType="numeric"
              onChangeText={(value) => setQuantity(value)}
              />
              <Text style={styles.label}>Price</Text>
              <TextInput style={styles.input} 
              value={price}
              keyboardType="numeric"
              onChangeText={(value) => setPrice(value)}
              />
              <TouchableOpacity style={styles.buttonContainer} onPress={updateSingleTask} >
            <Text style={{ color: '#222', fontWeight: 'bold' }}>Update</Text>
          </TouchableOpacity>
          </View>

      </View>
    )
}

export default EditMaterials;

const styles = StyleSheet.create({
  container:{
    width:"95%",
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
    color: 'black',
    fontWeight:'bold'
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
    width: '40%',
    height:40,
    alignSelf: 'center',
    padding: 5,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25
  }
})