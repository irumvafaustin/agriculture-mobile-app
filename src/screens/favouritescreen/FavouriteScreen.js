import React from "react";
import {ScrollView, Dimensions, StyleSheet,Text, View, Image} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
var {height, width}= Dimensions.get("window");

export default function FavouriteScreen () {
    return(
        <ScrollView>
            <View style={styles.topIcon}>
                <Ionicons name="arrow-back" size={35} color="gray" />
            </View>
            <View style={styles.container}>
            
            <Text style={styles.title}>Favourite</Text>
            <View horizontal showsHorizontalScrollIndicator={false}>
            <View style={{ marginLeft: 20}}>
                <Image
                 style={styles.productImage}
                 source={require("../../../assets/maize.jpeg")}
                 />
                 <Text>300FRW</Text>
                 <Text>Maize crops</Text>
            </View>
            <View style={{ marginLeft: 20}}>
                <Image
                 style={styles.productImage}
                 source={require("../../../assets/caroti.jpeg")}
                 />
                 <Text>500FRW</Text>
                 <Text>Carrot crops</Text>
            </View>

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
        marginLeft:"2%",
        marginBottom:"4%",
        color:"black"
    },
    productImage : {
        height:180,
        width: 140,
        borderRadius: 10,
        marginBottom: 12.0,
        marginTop: 12.0,
    },
    topIcon:{
        height:50,
        marginLeft: "6%",
        marginTop:50
        
    }
});