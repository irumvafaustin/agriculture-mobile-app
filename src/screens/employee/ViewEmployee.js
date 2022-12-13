import React,{useEffect, useState} from 'react';
import { Text, View ,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const  ViewEmployee = ({navigation}) => {
  const [item,setItems] = useState([]);

useEffect(()=>{
  fetch('http://172.31.42.22:5000/employee').then(
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
                <Text style={styles.namestyle}>Phone:</Text>
                <Text style={styles.materialName}>{item.phone}</Text>
                <Text style={styles.namestyle}>Gender:</Text>
                <Text style={styles.materialName}>{item.gender}</Text>
                <Text style={styles.namestyle}>Position:</Text>
                <Text style={styles.materialName}>{item.position}</Text>
                <Text style={styles.namestyle}>Salary:</Text>
                <Text style={styles.materialName}>{item.salary}</Text>
                <View style={styles.line}/>
              </View>
              <View style={styles.icons}>
              <AntDesign name="edit" size={24} color="#27A8A9" 
                onPress={() => navigation.navigate('UpdateEmployee',{id:item.id,name:item.name,phone:item.phone,gender2:item.gender,position:item.position,salary:item.salary})}  />
                <MaterialCommunityIcons name="delete-alert" size={28} color="#5C200B" 
                onPress={async() =>{
                  try{
                    var idx=item.id
                    console.log(idx)
                    const res =await axios.post('http://172.31.42.22:5000/deleteemployee',{idx})
                    
                    navigation.navigate('ViewEmployee');
                      }catch(error){
                    console.log(error)
                      }
                }}  />
              </View>
          </View>
          )}  />  
          <TouchableOpacity style={styles.add} onPress={() => navigation.navigate("AddEmployee")}>
              <Text style={{fontWeight:'bold'}}>ADD</Text> 
        </TouchableOpacity>
        </View>
      
      </View>
    )
}

export default ViewEmployee;


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
    borderRadius:1,
    borderColor:"black"
  },
  namestyle:{
    color: '#111',
    fontSize: 20,
    fontWeight: '700',
  },
  materialName:{
    color: '#111',
    fontSize: 20,
    marginLeft:100,
    marginTop:-27,
  },
  icons:{
    flexDirection:'row',
    padding:20,
    position:'absolute',
    right:2,
    paddingRight:10
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
  },
  line:{
  borderBottomWidth:1,
  marginBottom:15
  }

})