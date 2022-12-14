import React,{useState} from 'react';
import { View, Text,TextInput,Button, StyleSheet,Alert } from 'react-native';
import axios from 'axios';
import { useStripe } from '@stripe/stripe-react-native';

const PaymentComponent = ({total,products}) => {
    const [name,setName] = useState('');
    const [amount] = useState(89);
    const {initPaymentSheet,presentPaymentSheet} = useStripe();

    const subscribe = async () =>{
        try {
            const res = await axios.post("http://172.31.42.22:5000/stripePay",{name,amount});
            console.log(res.data);
            const {clientSecret} = res.data;
            console.log("secret",clientSecret)
            console.log(amount)
            const initSheet = await initPaymentSheet({
                merchantDisplayName: "Electronic",
                paymentIntentClientSecret:clientSecret,
                defaultBillingDetails: {
                    name: 'Jane',
                  }
            });
            if(initSheet.error) return Alert.alert(initSheet.error.message);
            const openPaymentSheet = await presentPaymentSheet({clientSecret});
            if(openPaymentSheet.error) return console.log(openPaymentSheet.error.message);
            // const order = await axios.post("http://172.31.42.22:5000/stripePay",
            // {
            //     products:[],
            //     amount:amount
            // }
            // );
            const ordersData = order.data;
            console.log(ordersData)
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <View>
        <TextInput 
        placeholder='Your Name' 
        value={name} 
        onChangeText={(value) => setName(value)}
        style={styles.TextInput}
         />
         <Button title="Checkout" variant="primary" onPress={(subscribe)} />
    </View>
  )
}

export default PaymentComponent;

const styles = StyleSheet.create({
    TextInput:{
        width:300,
        fontSize:20,
        padding:6,
        borderWidth:1,
        borderColor:'green',
        marginBottom:10,
        borderRadius:5
    }
});