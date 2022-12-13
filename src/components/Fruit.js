import React, {useState, useEffect} from "react";
import { ScrollView, StyleSheet, Image, View, Dimensions } from "react-native";
import Swiper from "react-native-swiper/src";
var { width } = Dimensions.get('window');
const Banner = () =>{
    const [bannerData, setBannerData] = useState([]);
    useEffect(() => {
       setBannerData([
        require("../../assets/image/voka.jpeg"),
        require("../../assets/image/orange.jpeg"),
        require("../../assets/image/iseri.jpeg"),
        require("../../assets/image/imyembe.jpeg"),
       ]);
       return () => {
        setBannerData([]);
       }
    }, []);
    return (
        <ScrollView>
            <View>
                <Swiper
                style={{height: width/2}}
                showsButtons={false}
                autoplay={true}
                autoplayTimeout={2}
                >
                    {bannerData.map((item) =>{
                        return(
                            <Image
                            key={item}
                            style={styles.ImageBanner}
                            resizeMode="cover"
                            source={item}
                            />
                        )
                    })}

                </Swiper>
            </View>
        </ScrollView>
    )
}
const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    swiper:{
        width: width,
        alignItems: "center",
        margin: 10,
    },
    ImageBanner: {
        height:300,
        width:400,
        marginHorizontal:12.0,
    }
});
export default Banner;