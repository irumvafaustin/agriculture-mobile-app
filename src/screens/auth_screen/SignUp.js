import axios from 'axios';
import React, {useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Toast } from "react-native-toast-message/lib/src/Toast";

 const SignUp=({navigation})=>{

  const [name, setName]=useState('');
  const [gender, setGender]=useState('');
  const [phone, setPhone]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

 
  const validate = ()=> {
    const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    if(password == "" && email == "" && name == "" && gender == "" && phone == ""){
   Toast.show({
    type:"error",
    text1:"Hellor sir",
    text2:"Both field are empty",
   })
    }else if(name==""){
      Toast.show({
       type:"error",
       text1:"Hellor sir",
       text2:"Full name is empty",
      })
       }else if(gender==""){
        Toast.show({
         type:"error",
         text1:"Hellor sir",
         text2:"gender is empty",
        })
         }else if(phone==""){
          Toast.show({
           type:"error",
           text1:"Hellor sir",
           text2:"Phone number is empty",
          })
           }else if(!reg.test(email)){
      Toast.show({
       type:"error",
       text1:"Hellor sir",
       text2:"email is not correct form",
      })
       }else if(password==""){
        Toast.show({
         type:"error",
         text1:"Hellor sir",
         text2:"password is empty",
        })
         }else  {
          Toast.show({
           type:"Success",
           text1:"Hellor sir",
           text2:"successfully login",
          })
           }
  }
 const submitreg = async()=>{
  try{
    const res =await axios.post('http://172.31.42.22:5000/signup',{name,gender,phone,email,password})
    console.log(res.data)
      }catch(error){
    console.log(error)
      }
 }
  
    return (
      <View style={styles.container}>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("../../components/database/images/user.png")}/>
          <TextInput style={styles.inputs}
              name="name"
              placeholder="Full name"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => setName(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("../../components/database/images/gender.png")}/>
          <TextInput style={styles.inputs}
              name="gender"
              placeholder="Gender"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => setGender(text)}/>
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("../../components/database/images/phone.png")}/>
          <TextInput style={styles.inputs}
              name="phone"
              placeholder="Phone Number"
              keyboardType="numeric"
              underlineColorAndroid='transparent'
              onChangeText={(text) => setPhone(text)}/>
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("../../components/database/images/email.png")}/>
          <TextInput style={styles.inputs}
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(text) => setEmail(text)}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={require("../../components/database/images/password.png")}/>
          <TextInput style={styles.inputs}
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(text) => setPassword(text)}/>
        </View>

        <TouchableOpacity
         style={[styles.buttonContainer, styles.signupButton]} 
         onPress={submitreg}
         >
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>
          navigation.navigate('Login')}
         >
          <Text style={{color:"blue"}}>Already have an account Login</Text>
        </TouchableOpacity>

      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
      borderBottomColor: 'black',
      backgroundColor:'#F5FFFA',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#496646",
  },
  signUpText: {
    color: 'white',
  }
});
export default SignUp;
