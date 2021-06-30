import React from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { Rating, AirbnbRating } from "react-native-ratings";
import Card from "../components/Card";
import Color from "../constants/Color";

const PaymentSuccessScreen = (props) => {
  return (
    <View style={{marginTop:20}}>  
      <View>
        <View style={{alignItems:"center"}}>
          <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",margin:15,}}>Payment Successful</Text>
          <Text style={{color:Color.primary,fontSize:18,fontWeight:"bold",textAlign:"center",margin:15,}}>
            To win instant reward rate the service and answer questions
          </Text>
        </View>
      </View>
      <View style={{alignItems:"center"}}>
        <Text style={{fontSize:16,fontWeight:"bold"}}>Indiranagar car refueling</Text>
        <AirbnbRating reviewSize={0} reviews={[]} count={5} defaultRating={0} size={20} selectedColor={Color.primary}/>
      </View>
      <View style={{marginTop:20,alignItems:"center",justifyContent:"center",padding:15}}>
        <Text style={{textAlign:"center",fontSize:18,color:Color.primary,fontWeight:"bold"}}>Questions</Text>
        <Card>
          <Text>Did You get your tires checked?</Text>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <Button color={Color.primary}>Yes</Button>
            <Button color={Color.primary}>No</Button>

          </View>

        </Card>
      </View>
    </View>
  );
};

export default PaymentSuccessScreen;
