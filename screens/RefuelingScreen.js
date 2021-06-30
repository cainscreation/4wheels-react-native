import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { Button, TextInput } from "react-native-paper";
import CategoryGridTile from "../components/CategoryGrid";
import Modal from "react-native-modal";

import Header from "../components/Header";
import Color from "../constants/Color";
import Card from "../components/Card";
const { width } = Dimensions.get("window");

const RefuelingScreen = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [upi, setUpi] = useState(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };
  const toggleUPI = () => {
    setUpi(!upi);
  };
  const upiVariable = () => {
    if (upi == true) {
      return (
        <View>
          <TextInput
            label="UPI Address"
            // value={carManufacture}
            mode="outlined"
            // onChangeText={(text) => setCarManufacture(text)}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 20,
            }}
          >
            <View>
              <Button color={Color.primary} mode="contained" onPress={toggleUPI}>
                Verify
              </Button>
            </View>
            <View>
              <Button color={Color.primary} mode="contained" onPress={toggleModal}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      );
    }
    else{return(
      <View>
      <TextInput
        label="Confirm UPI Address"
        // value={carManufacture}
        mode="outlined"
        // onChangeText={(text) => setCarManufacture(text)}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <View>
          <Button mode="contained" color={Color.primary} onPress={()=>{props.navigation.navigate("PaymentSuccessScreen")}}>
            Verify
          </Button>
        </View>
        <View>
          <Button mode="contained" color={Color.primary} onPress={toggleModal}>
            Cancel
          </Button>
        </View>
      </View>
        <TextInput
        label="Amount"
        // value={carManufacture}
        mode="outlined"
        // onChangeText={(text) => setCarManufacture(text)}
      />
      <View>
        <Header title="UPI Payment Options"/>
        <View style={{flexDirection:"row"}}>
        <CategoryGridTile
          icon={<Text style={{ fontSize: width/35, color: Color.primary }}>UPI</Text>}
          color="#fff"
          onSelect={toggleModal}
        />
         <CategoryGridTile
          icon={<Text style={{ fontSize: width/35, color: Color.primary }}>UPI</Text>}
          color="#fff"
          onSelect={toggleModal}
        />
        <CategoryGridTile
          icon={<Text style={{ fontSize: width/35, color: Color.primary }}>UPI</Text>}
          color="#fff"
          onSelect={toggleModal}
        />
        </View>
        <View style={{flexDirection:"row"}}>
        <CategoryGridTile
          icon={<Text style={{ fontSize: width/35, color: Color.primary }}>UPI</Text>}
          color="#fff"
          onSelect={toggleModal}
        />
         <CategoryGridTile
          icon={<Text style={{ fontSize: width/35, color: Color.primary }}>UPI</Text>}
          color="#fff"
          onSelect={toggleModal}
        />
        <CategoryGridTile
          icon={<Text style={{ fontSize: width/35, color: Color.primary }}>UPI</Text>}
          color="#fff"
          onSelect={toggleModal}
        />
        </View>
      </View>
    </View>
    )}
  };

  return (
    <ScrollView>
      <Header title="Refueling Payment" />
      <View>
        <CategoryGridTile
          icon={
            <MaterialIcons name="payment" color={Color.primary} size={width/20} />
          }
          color="#fff"
          title="Payment for Car Refueling"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Modal isVisible={isModalVisible}>
          <View
            style={{
              flex: 2,
              backgroundColor: "white",
              paddingVertical: 20,
              paddingHorizontal: 30,
            }}
          >
            <View>{upiVariable()}</View>
          </View>
        </Modal>
        <CategoryGridTile
          icon={<Text style={{ fontSize: width/35, color: Color.primary }}>UPI</Text>}
          color="#fff"
          onSelect={toggleModal}
        />
{/* QR Code */}
        <CategoryGridTile
          icon={<Ionicons name="scan" color={Color.primary} size={width/20} />}
          color="#fff"
          onSelect={()=>{props.navigation.navigate("QRScanner")}}
        />
      </View>
      <View>
        <Header title="Other nearby stations" />
        <Card bg="#fff" style={{ marginHorizontal: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: width/30 }}>
                Indiranagar car Refueling
              </Text>
              <Text>2.5 km from your location</Text>
            </View>
            <View>
              <FontAwesome5 name="directions" size={ width/12} color={Color.primary} />
            </View>
          </View>
        </Card>
        <Card bg="#fff" style={{ marginHorizontal: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: width/30 }}>
                Indiranagar car Refueling
              </Text>
              <Text>2.5 km from your location</Text>
            </View>
            <View>
              <FontAwesome5 name="directions" size={ width/12} color={Color.primary} />
            </View>
          </View>
        </Card>
        <Card bg="#fff" style={{ marginHorizontal: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontWeight: "bold", fontSize: width/30 }}>
                Indiranagar car Refueling
              </Text>
              <Text>2.5 km from your location</Text>
            </View>
            <View>
              <FontAwesome5 name="directions" size={ width/12} color={Color.primary} />
            </View>
          </View>
        </Card>
        </View>
    </ScrollView>
  );
};

export default RefuelingScreen;

const styles = StyleSheet.create({});
