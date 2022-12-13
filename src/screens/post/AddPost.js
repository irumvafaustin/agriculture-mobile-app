import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import axios from 'axios';

const AddPost = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createPost = async () =>{
      
    if(title == "" && description == ""){
     Toast.show({
      type:"error",
      text1:"Hellor sir",
      text2:"Both field are empty",
     })
      }else if(title==""){
        Toast.show({
         type:"error",
         text1:"Hellor sir",
         text2:"title is empty",
        })
         }else if(description==""){
          Toast.show({
           type:"error",
           text1:"Hellor sir",
           text2:"gender is empty",
          })
           
    }
    try{
        const res =await axios.post('http://172.31.42.22:5000/post',{title,description})
        console.log(res.data)
          }catch(error){
        console.log(error)
          }
  }
  
  return (
    
      <View style={styles.container}>
        <Text style={styles.title}>AddPost</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => setTitle(value)}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            multiline
            onChangeText={(value) => setDescription(value)}
          />
          <TouchableOpacity style={styles.buttonContainer} onPress={() => createPost()} >
            <Text style={{ color: '#222', fontWeight: 'bold' }}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default AddPost;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: "95%",
    height: 500,
    marginTop: 20,
    padding: 10,
    borderRadius: 15
  },
  title: {
    textAlign: 'center',
    color: "#171C17",
    fontSize: 25
  },
  formContainer: {
    paddingVertical: 10, paddingHorizontal: 5
  },
  label: {
    paddingVertical: 7,
    color: '#171C17'
  },
  input: {
    borderWidth: 1,
    borderColor: '#171C17',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 5
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