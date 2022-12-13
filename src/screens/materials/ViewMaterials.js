import React,{useEffect, useState} from 'react';
import { Text, View ,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import {Ionicons} from "react-native-vector-icons";
import axios from 'axios';



const  ViewMaterials = ({navigation}) => {
  const [item,setItems] = useState([]);

useEffect(()=>{
  fetch('http://172.31.42.22:5000/material').then(
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
          keyExtractor={item => item.id}
          renderItem={({item}) => (
              <View style={styles.materialcontainer} key={item.id}>
              <View>
                <Text style={styles.namestyle}>Name:</Text>
                <Text style={styles.materialName}>{item.name}</Text>
                <Text style={styles.namestyle}>Type:</Text>
                <Text style={styles.materialName}>{item.type}</Text>
                <Text style={styles.namestyle}>Quantity:</Text>
                <Text style={styles.materialName}>{item.quantity}</Text>
                <Text style={styles.namestyle}>Price:</Text>
                <Text style={styles.materialName}>{item.price}</Text>
                <View style={styles.line}/>
               
              </View>
              <View style={styles.icons}>
                <Ionicons name="create" size={28} color="orange" 
                onPress={() => navigation.navigate('Update',{id:item.id,name:item.name,type:item.type,quantity2:item.quantity,price:item.price})}  />
                <Ionicons name="trash" size={28} color="#ff0000" 
                onPress={async() =>{
                  try{
                    var idx=item.id
                    console.log(idx)
                    const res =await axios.post('http://172.31.42.22:5000/deletematerial',{idx})
                    
                    navigation.navigate('ViewMaterials');
                      }catch(error){
                    console.log(error)
                      }
                }}  />
              </View>
          </View>
          )}  />  
          <TouchableOpacity style={styles.add} onPress={() => navigation.navigate("add")}>
              <Text style={{fontWeight:'bold'}}>Add </Text> 
        </TouchableOpacity> 
        </View>
      
      </View>
    )
}

export default ViewMaterials;


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
    borderColor: '#171C17',
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
    backgroundColor: '#496646',
    width: '50%',
    height:50,
    alignSelf: 'center',
    padding: 5,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 25
  },
  line:{
borderBottomWidth:1,
marginBottom:15
  }

})