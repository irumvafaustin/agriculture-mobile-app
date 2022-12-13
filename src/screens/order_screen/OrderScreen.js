import React from "react";
import {ScrollView, Dimensions, StyleSheet,Text, View} from "react-native";
import OrderProduct from "../../components/CartProduct";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainButton from "../../components/MainButton";
var {height, width}= Dimensions.get("window");

export default function OrderScreen () {
    return(
        <ScrollView>
            <View style={styles.topIcon}>
                <Ionicons name="arrow-back" size={35} color="gray" />
            </View>
            <View style={styles.container}>
            
            <Text style={styles.title}>My Orders</Text>
            <OrderProduct />
            <View style={{width: 100, height: 50, justifyContent:"center", alignItems:"center"}}>
                  <MainButton
                     onPress={()=>{}}
                     title="Order Again"
                  />
                  </View>

            </View>
            
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    },
    title:{
        fontSize:24,
        marginTop:"12%",
        marginLeft:"8%",
        marginBottom:"4%",
        color:"black"
    },
    topIcon:{
        height:50,
        marginLeft: "6%",
        marginTop:50
        
    }
});