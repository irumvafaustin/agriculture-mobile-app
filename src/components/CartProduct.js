import React,{useState} from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { colors } from "../styles/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

const CartProduct = () => {
    const [count, setCount]=useState(1);
    return(
        <View style={[styles.row, {margin: 12, elevation: 12.0, backgroundColor:"white", height:250, alignItems:"center", justifyContent:"center" }]}>
            <Image
            style={{
                height:140,
                width:140,
                marginRight:16.0,
            }}
            source={require("../../assets/ibigori.jpeg")}
            />
            <View>
                <Text style={styles.name}>Maize Seed</Text>
                <Text style={[styles.name, {color:"gray"}]}>Maize Seed company</Text>
                <Text style={[styles.name, {marginTop:0, fontWeight:"normal", color:colors.primaryColor}]}>Maize Seed</Text>
                <View style={[styles.row,{marginTop:12.0, width:120, backgroundColor:"f6f6f6", height:40, justifyContent:"space-between",alignItems:"center"}]}>
                  
                  <TouchableOpacity
                  
                  activeOpacity={0.5}
                  onPress={() =>{
                    if (count > 1) {
                    setCount(parseInt(count)-1);
                    }
                  }}
                  >
                    <Ionicons size={35} color="black" name="remove" />
                  </TouchableOpacity>
                  <Text style={{fontWeight:"normal", fontSize:20}}>{count}</Text>
                  <TouchableOpacity
                  
                  activeOpacity={0.5}
                  onPress={() =>{
                    setCount(parseInt(count)+1);

                  }}
                  >
                    <Ionicons size={35} color="black" name="add" />
                  </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    row:{
        flexDirection:"row"
    },
    name:{
        fontSize:20,
        color:"#2C323C",
        marginTop:12.0,
    }
})
export default CartProduct;