import React from "react";
import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import Card from "../components/Card";
import Color from "../constants/Color";

const { width } = Dimensions.get("window");

const UserScreen = (props) => {
  const [select, setSelect] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 0 }}>
        <View
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>
            USER INFORMATION
          </Text>
          <View>
            <Button color={Color.primary}
              icon="pen"
              mode="default"
              onPress={() => console.log("Pressed")}
            >
              Edit
            </Button>
          </View>
        </View>
        {/* <TextInput
          label="Name"
          value={text}
          mode="outlined"
          onChangeText={(text) => setText(text)}
        /> */}
        <View style={{ marginTop: 30 }}>
          <Text
            style={{ fontWeight: "bold", color: Color.primary, fontSize: 18 }}
          >
            User Name
          </Text>
          <Text>Harshit Goyal</Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text
          style={{ fontWeight: "bold", color: Color.primary, fontSize: 18 }}
        >
          Mobile Number
        </Text>
        <Text>+91-8955638632</Text>
      </View>

      <View
        style={{
          marginVertical: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 22 }}>
          CAR INFORMATION
        </Text>
        <View>
          <Button color={Color.primary}
            icon="plus"
            mode="default"
            onPress={() => {
              props.navigation.navigate("AddCarScreen");
            }}
          >
            Add
          </Button>
        </View>
      </View>
      <View>
        <Card bg={select == 0 ? Color.primary : "white"}>
          {/* <View style={{ BackgroundColor: Color.primary }}> */}
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Maruti
          </Text>
          <Text style={{ fontSize: 18, color: "white" }}>RJ20 MM 7895</Text>
          {/* </View> */}
        </Card>
        <Card bg={select == 1 ? Color.primary : "white"}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Maruti</Text>
          <Text style={{ fontSize: 18 }}>RJ20 MM 7895</Text>
        </Card>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",
    flex: 1,
    marginHorizontal: 30,
    marginTop: width / 6,
    // alignItems: "center",
  },
});

export default UserScreen;
