import React,{useEffect, useState} from 'react';
import { Text, View ,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Ionicons} from "react-native-vector-icons";
import axios from 'axios';



const  Customer = ({navigation}) => {
  const [item,setItems] = useState([]);

 useEffect(()=>{
  fetch('http://172.31.42.22:5000/signin').then(
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
});
    return (
      <View style={styles.container}>
        <View style={styles.all}>
          <FlatList data={item} 
          keyExtractor={item => item.userid}
          renderItem={({item}) => (
              <View style={styles.materialcontainer} key={item.userid}>
              <View>
                <Text style={styles.namestyle}>Name:</Text>
                <Text style={styles.materialName}>{item.name}</Text>
                <Text style={styles.namestyle}>Gender:</Text>
                <Text style={styles.materialName}>{item.gender}</Text>
                <Text style={styles.namestyle}>Phone:</Text>
                <Text style={styles.materialName}>{item.phone}</Text>
                <Text style={styles.namestyle}>Email:</Text>
                <Text style={styles.materialName}>{item.email}</Text>
                <View style={styles.line}/>
               
              </View>
              <View style={styles.icons}>
                <Ionicons name="create" size={28} color="#27A8A9" 
                onPress={() => navigation.navigate('Update',{userid:item.userid,name:item.name,gender:item.gender,phone:item.phone,email:item.email})}  />
                <Ionicons name="trash" size={28} color="#9A1709" 
                onPress={async() =>{
                  try{
                    var idx=item.id
                    console.log(idx)
                    const res =await axios.post('http://172.31.42.22:5000/deleteusers',{idx})
                    
                    navigation.navigate('Customer');
                      }catch(error){
                    console.log(error)
                      }
                }}  />
              </View>
          </View>
          )}  />
        </View>
      
      </View>
    )
}

export default Customer;


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
    padding:20,
    position:'absolute',
    right:4,
  },
  all:{
    height:'90%',
    alignContent:'space-between'
  },
  
  line:{
    borderBottomWidth:1,
    marginBottom:10
  }

})