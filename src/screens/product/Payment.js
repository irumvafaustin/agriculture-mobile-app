import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { StripeProvider } from '@stripe/stripe-react-native';
import {PUBLISHABLE_KEY} from '@env';
import PaymentComponent from './PaymentComponent';


const Payment = ({route}) => {
  const total = route.params.total;
  const products = route.params.cart;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <StripeProvider
      publishableKey={PUBLISHABLE_KEY}
      merchantIdentifier={`merchant.com.Native`}>
        <PaymentComponent total={total} products={products} />
      </StripeProvider>
    </View>
  )
}

export default Payment;


const styles = StyleSheet.create({
  container:{
    paddingHorizontal:20,
    paddingVertical:10
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
    paddingBottom:5,
    textAlign:"center",
  }
});