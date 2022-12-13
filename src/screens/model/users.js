import React from "react";
import { View, Text, Button, Image, ScrollView, TextInput, StyleSheet } from "react-native";

const users=()=>{
    return (
     <ScrollView>
        <View style={styles.container}>
        <View style={styles.container-1}>
         <Image
         source={require("../../../assets/image/carrot.jpeg")}
         style={styles.image}
         />
        </View>
        <View>
            <Text style={styles.container_2}>Welcome Page</Text>
        </View>
        </View>
     </ScrollView>
    )
    
    }
    const styles=StyleSheet.create({
        container:{
            flex:1
        },
        image:{
            width:100,
            height:100,

        },
        container_2:{
        backgroundColor:"skyblue",
        marginLeft:10
        }

       });
       export default users;
   
