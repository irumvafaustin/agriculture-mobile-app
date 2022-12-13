import React, {useEffect, useState} from "react";
import { ScrollView,Text, StyleSheet,Dimensions, TextInput, View, FlatList } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Banner from "../../components/Banner";
import Fruit from "../../components/Fruit";
import Hydrocarbon from "../../components/Hydrocarbon";
var { width } = Dimensions.get('window');

const HomeScreen =()=>{
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
        
    <ScrollView style ={styles.container}>
        
       
         <View style={styles.container}>
        <View style={styles.all}>
          <FlatList data={item} 
          keyExtractor={item => item.id}
          renderItem={({item}) => (
              <View style={styles.materialcontainer} key={item.id}>
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.view}>{item.description}</Text>
              </View>
             </View>
          )}  />
        </View>
      
      </View>
        <Hydrocarbon />
      
        <Text style={styles.title}>Fruit</Text>
        <Text style={styles.view}>Fruit make up a large portion of our diets. Did you know many foods that we consider to be vegetables are actually fruits? The botanical definition of fruit is a seed-bearing part of a flowering plant or tree that can be eaten as food... more</Text>
        
        <Fruit/>
        
        <Text style={styles.title}>Vegetabe</Text>
        <Text style={styles.view}>vegetable fats are found in some processed foods, such as margarine, salad dressings, mayonnaise, and cookies. The most widely known vegetable oils in everyday food preparation include soybean oil, coconut oil, olive oil and sunflower oil... more</Text>
       
       <Banner />
        
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#008080",
        marginTop:0
    },
    title:{
        fontSize: 24,
        marginTop:"12%",
        marginLeft: "4%",
        marginBottom: "4%",
        color: "white",
    },
    input: {
        height: 50,
        width:"90%",
        elevation:12.0,
        flexDirection:"row",
        marginLeft:"2%",
        marginTop:-10,
        alignItems: "center",
        backgroundColor: "white",

    },
    view:{
        color:"white",
        marginLeft:10
        
    }

});

export default HomeScreen;