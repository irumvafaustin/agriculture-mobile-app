import React from "react";
import {ScrollView, Dimensions, StyleSheet,Text, View} from "react-native";
import CartProduct from "../../components/CartProduct";
import MainButton from "../../components/MainButton";
import Ionicons from "react-native-vector-icons/Ionicons";

var {height, width}= Dimensions.get("window");

export default function CartScreen () {
    return(
        <ScrollView>
            <View style={styles.topIcon}>
                <Ionicons name="arrow-back" size={35} color="gray" />
            </View>
            <View style={styles.container}>
            
            <Text style={styles.title}>Cart</Text>
            <CartProduct />
            <View style={{height:height/1.9, width: width, justifyContent:"center", alignItems:'center'}}>
                <MainButton
                onPress={()=>{}}
                title="CONTINUE"
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