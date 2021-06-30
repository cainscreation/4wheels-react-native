import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import Color from "../constants/Color";

const VerificationScreen = (props) => {
  const [textInput, setTextInput] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 100 }}>
        <Title style={{ fontSize: 26, textAlign: "center" }}>
          Verification
        </Title>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          You will get OTP via <Text style={{fontWeight:"bold"}}>SMS</Text>
        </Text>
      </View>
      <View>
        <TextInput
          style={{ textAlign: "center",fontWeight:'bold',fontSize:18 }}
          // label=""
          secureTextEntry={true}
          placeholder="OTP"
          value={textInput}
          keyboardType="number-pad"
          maxLength={4}
          mode="outlined"
          onChangeText={(text) => setTextInput(text)}
        />
      </View>
      <View style={styles.button}>
        <Button color={Color.primary} mode="contained">Verify</Button>
      </View>
      <View style={{ alignItems: "center",marginTop:10 }}>
        <Text>Dont receive the verification OTP?</Text>
        <View>
          <Button color={Color.primary} mode="text" onPress={() => props.navigation.navigate({
              routeName: "MenuScreen",
            })}>
            Resend
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 50,
    justifyContent: "center",
    flex: 1,
    // alignItems: "center",
  },
  button: {
    marginTop: 20,
  },
});

export default VerificationScreen;
