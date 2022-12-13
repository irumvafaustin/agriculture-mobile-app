import React from "react";
import { View, Text, ImageBackground, Image,StyleSheet  } from "react-native";

function WelcomeScreen (props){
    return(
<ImageBackground 
resizeMode="contain"
style= {styles.background}
source={require("../assets/logo.jpeg")}
>
<View style={styles.logoConteiner}>
     <Image style={styles.logo} source={require("../assets/carrot.jpeg")} /> 
     <Text>Say Hi</Text> 
</View>  
<View style={styles.loginbutton}></View>
<View style={styles.registerbutton}></View>
</ImageBackground>

    );
}
const styles = StyleSheet.create({
background:{
    flex:1,
    width:"95%",
    justifyContent:"flex-end",
    alignItems:"center",
},
logoConteiner:{
    position:"absolute",
    top:70,
    alignItems:"center"
},
logo:{
    width:100,
    height:100,

},
loginbutton:{
    width:"100%",
    height:70,
    backgroundColor:"#F52887"
},
registerbutton:{
    width:"100%",
    height:70,
    backgroundColor:"#3B9C9C"
}

})
export default WelcomeScreen;