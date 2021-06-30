import React, { useState, useRef } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import auth from "@react-native-firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";


import * as firebase from "firebase";
import Color from "../constants/Color";
const firebaseConfig = {
  apiKey: "AIzaSyDuVF-IwfMOnbr8aVR5-KklZPrY-ZQIxUA",
  authDomain: "wheels-5c69f.firebaseapp.com",
  databaseURL: "https://wheels-5c69f-default-rtdb.firebaseio.com",
  projectId: "wheels-5c69f",
  storageBucket: "wheels-5c69f.appspot.com",
  messagingSenderId: "67726154697",
  appId: "1:67726154697:web:2475403fb9664da3eb6618",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
const LoginScreen = (props) => {
  const firebaseConfig = firebase.apps.length
    ? firebase.app().options
    : undefined;

  const recaptchaVerifier = useRef(null);
  const [screenState, setScreenState] = useState("login");
  const [phone, setPhone] = useState("");
  const [OTP, setOTP] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const re_enter = () => {
    setScreenState("login");
    setPhone("");
    setOTP("");
    setVerificationId("");
  };

  // Function to Sign user in
  const signInUser = async () => {
    if (phone.length === 10) {
      try {
        var phon = "+91" + phone;
        console.log(phon);
        const localVerificationId = await firebase
          .auth()
          .signInWithPhoneNumber(phon, recaptchaVerifier.current);
        setVerificationId(localVerificationId);
        setScreenState("OTP");
      } catch (e) {
        console.log(e);
        alert(e);
      }
    } else {
    }
  };

  const verifyOTP = async () => {
    try {
      const credentials = firebase.auth.PhoneAuthProvider.credential(
        verificationId.verificationId,
        OTP
      );
      const output = await firebase.auth().signInWithCredential(credentials);
      setScreenState("Authenticated");
      props.navigation.navigate({
        routeName: "MenuScreen",
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  if (screenState === "login") {
    return (
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <View style={{ alignItems: "flex-end", marginBottom: 50 }}>
          <Button color={Color.primary}
            mode="text"
            onPress={() =>
              props.navigation.navigate({ routeName: "MainScreen" })
            }
          >
            skip
          </Button>
        </View>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Image
            source={require('../assets/icons/icons-32.png')}
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
            
          />
        </View>
        <View>
          <Text style={{ color: "#888" }}>Welcome to 4Wheels</Text>
        </View>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <View>
            <TextInput value={"+91"} mode="outlined" disabled />
          </View>
          <View style={{ flex: 1, marginHorizontal: 10 }}>
            <TextInput
              label="Contact Number"
              value={phone}
              maxLength={10}
              keyboardType={"number-pad"}
              mode="outlined"
              onChangeText={(text) => setPhone(text)}
            />
          </View>
        </View>
        <View style={styles.button}>
          <Button color={Color.primary} mode="contained" onPress={signInUser}>
            Verify my Number
          </Button>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container2}>
        <View style={{ marginBottom: 100 }}>
          <Title style={{ fontSize: 26, textAlign: "center" }}>
            Verification
          </Title>
          <Text style={{ fontSize: 15, textAlign: "center" }}>
            You will get OTP via <Text style={{ fontWeight: "bold" }}>SMS</Text>
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginTop: 10,
              color: Color.primary,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            +91{phone}
          </Text>
        </View>
        <View>
          <TextInput
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
            // label=""
            secureTextEntry={true}
            placeholder="OTP"
            value={OTP}
            keyboardType="number-pad"
            maxLength={6}
            mode="outlined"
            onChangeText={(text) => setOTP(text)}
          />
        </View>
        <View style={styles.button}>
          <Button color={Color.primary} mode="contained" onPress={verifyOTP}>
            Verify
          </Button>
        </View>
        <View style={styles.button}>
          <Button color={Color.primary} mode="text" onPress={re_enter}>
            Re-Enter Contact Number
          </Button>
        </View>
        <View style={{ alignItems: "center", marginTop: 10 }}>
          <Text>Dont receive the verification OTP?</Text>
          <View>
            <Button color={Color.primary} mode="text" onPress={signInUser}>Resend</Button>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 50,
    justifyContent: "center",
    // flex: 1,
    // alignItems: "center",
  },
  container2: {
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

export default LoginScreen;
