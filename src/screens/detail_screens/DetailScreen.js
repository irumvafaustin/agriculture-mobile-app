import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {colors} from "../../styles/color";
import MainButton from "../../components/MainButton";
import Banner from "../../components/Banner";;

const DetailScreen =({navigation})=>{
    return (
        <ScrollView style={styles.container}>
            <Banner />
            <Text style={styles.title}>Product Name</Text>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.price}>300FRW/KG</Text>
                <Text style={styles.oldprice}>250FRW/KG</Text>
            </View>
            <View style={styles.reviewContainer}>
                <View style={styles.numberReviewContainer}>
                    <Text style={styles.numberReviewContainerText}>10</Text>
                </View>
                <Text style={styles.price}>50 Reviews</Text>
            </View>
            <Text style={styles.title}>Discription</Text>
            <Text style={styles.discription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
            <View style={{marginHorizontal:0.0}}>
                <MainButton
                onPress={()=>{
                    navigation.navigate('CartScreen')
                }}
                title={"Add To Carts"}
                />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
 flex:1,
 backgroundColor:"#008080",

    },
    title:{
        fontSize:24,
        marginTop:"8%",
        marginLeft:"2%",
        marginBottom:"4%",
        color:"black"
    },
    discription:{
        fontSize:18,
        marginLeft:"2%",
        color:"gray"
    },
    numberReviewContainer:{
        height: 50,
        width: 80,
        borderRadius: 6.0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:colors.primaryColor,
    },
    reviewContainer:{
        height:70,
        marginTop: "10%",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 12.0,
        flexDirection: "row",
        borderColor: "e6e6e6e6",
        borderWidth:1,
    },
    price:{
        fontSize:22,
        marginLeft: "2%",
        color:colors.primaryColor,
    },
    numberReviewContainerText:{
        fontSize:22,
        color:"white",
    },
    oldprice:{
        fontSize:22,
        marginLeft: "2%",
        textDecorationLine: "line-through",
        marginLeft: "4%",
        color:"black",

    },
    topIcon:{
        height:120,
        marginHorizontal:8.0,
        paddingTop:12.0,
    }
})

export default DetailScreen;