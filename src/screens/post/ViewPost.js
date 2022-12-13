import React,{useEffect, useState} from 'react';
import { Text, View ,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Ionicons} from "react-native-vector-icons";
import axios from 'axios';



const  ViewPost = ({navigation}) => {
  const [item,setItems] = useState([]);

useEffect(()=>{
  fetch('http://172.31.42.22:5000/postdata').then(
    res=>{return res.json()}
  ).then(data=>{
    var temp=[]
    data.map((R)=>{
        temp.push(R)
      })
      setItems(temp);
      console.log(temp)
  }).catch(
    (err)=> console.log(err)
  )
}, []);
    return (
      <View style={styles.container}>
        <View style={styles.all}>
          <FlatList data={item} 
          keyExtractor={item => item.id}
          renderItem={({item}) => (
              <View style={styles.materialcontainer} key={item.id}>
              <View>
                <Text style={styles.materialName}>{item.title}</Text>
                <Text style={styles.materialName}>{item.description}</Text>
              </View>
             </View>
          )}  />
        </View>
      
      </View>
    )
}

export default ViewPost;


const styles = StyleSheet.create({
  container:{
    paddingVertical:10,
    paddingHorizontal:15,
  },
  title:{
    fontWeight:'bold',
    fontSize:25,
    borderBottomWidth:2,
    borderColor:'#444',
    paddingBottom:5
  },
  materialcontainer:{
    marginTop:5,
    borderRadius:8,
    backgroundColor:'#E0FFFF'
  },
  namestyle:{
    color: '#111',
    fontSize: 20,
    fontWeight: '700',
  },
  materialName:{
    color: '#111',
    fontSize: 20,
    marginLeft:120,
    marginTop:-27,
  },
  icons:{
    flexDirection:'row',
    padding:3,
    position:'absolute',
    right:4,
  },
  all:{
    height:'90%',
    alignContent:'space-between'
  },
  add:{
    backgroundColor:'pink',
    marginVertical:25,
    width:'40%',
    alignItems:'center',
    paddingVertical:10,
    borderRadius:8,
    marginLeft:5,
    marginTop:10
  },
  refresh:{
    backgroundColor:'green',
    marginVertical:25,
    marginLeft:200,
    width:'40%',
    marginTop:-65,
    alignItems:'center',
    paddingVertical:10,
    borderRadius:8
  }

})