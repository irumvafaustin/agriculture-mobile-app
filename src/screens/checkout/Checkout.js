import React from "react";
import {ScrollView, Dimensions, StyleSheet,Text, View} from "react-native";
import CartProduct from "../../components/CartProduct";
import MainButton from "../../components/MainButton";
import Ionicons from "react-native-vector-icons/Ionicons";

var {height, width}= Dimensions.get("window");

export default function Checkout () {
    return(
        <ScrollView>
            <View style={styles.topIcon}>
                <Ionicons name="arrow-back" size={35} color="gray" />
            </View>
            <View style={styles.container}>
            
            <Text style={styles.title}>Checkout</Text>

            <CartProduct />
            <Text style={[styles.title, {color:"grey"}]}>37/6, Moratuw</Text>
            <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={[styles.title, { color:"gray", fontSize: 19}]}>Sub Total </Text>
                <Text style={[styles.title, { fontSize: 20, marginRight: "8%"}]}>5000FRW </Text>
            </View>
            <View style={{ flexDirection:"row", justifyContent:"space-between"}}>
                <Text style={[styles.subdetails, { color:"gray", fontSize: 19}]}>Discount </Text>
                <Text style={[styles.subdetails, { fontSize: 20, marginRight: "8%"}]}>5% </Text>
            </View>
            <View style={{ flexDirection:"row", justifyContent:"space-between", borderBottomColor:"gray", borderBottomWidth:1, marginHorizontal:"8%"}}>
                <Text style={[styles.title, { fontSize: 19, marginLeft:"0%"}]}>Shipping </Text>
                <Text style={[styles.title, { fontSize: 20, color: "black"}]}>5% </Text>
            </View>
            <View style={{ flexDirection:"row", justifyContent:"space-between", borderBottomColor:"gray", borderBottomWidth:1, marginHorizontal:"8%"}}>
                <Text style={[styles.title, { fontSize: 19, marginLeft:"0%"}]}>Total </Text>
                <Text style={[styles.title, { fontSize: 20, color: "black"}]}>5500 </Text>
            </View>
                <MainButton
                onPress={()=>{}}
                title="Buy"
                />            
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
        //marginTop:"12%",
        marginLeft:"8%",
        marginBottom:"4%",
        color:"black"
    },
    subdetails:{
        fontSize:24,
        marginTop:"12%",
        marginLeft:"8%",
        marginBottom:"4%",
        color:"gray"
    },
    topIcon:{
        height:50,
        marginLeft: "6%",
        marginTop:50
        
    }
});