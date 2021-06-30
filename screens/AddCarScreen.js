import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  SafeAreaViewComponent,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";
import { MaterialIcons } from "@expo/vector-icons";

import Color from "../constants/Color";
const { width } = Dimensions.get("window");

const AddCarScreen = (props) => {
  const [carNumber, setCarNumber] = useState("");
  const [carManufacture, setCarManufacture] = useState("");
  const [carModel, setCarModel] = useState("");
  const [mgfDate, setMgfDate] = useState("");
  const [engineno, setEngineno] = useState("");
  const [chasis, setChasis] = useState("");
  const [registrationYr, setRegistrationYr] = useState("");
  const [screen, setScreen] = useState("select");
  const [image, setImage] = useState();

  // Image Picker
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    // console.log(result.base64);
    // img(result.uri)

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if (screen === "select") {
    return (
      <View style={{ marginHorizontal: 30 }}>
        <Header title="Add Car" />
        <View style={styles.input}>
          <TextInput
            label="Registration Number"
            value={carNumber}
            mode="outlined"
            onChangeText={(text) => setCarNumber(text)}
            left={
              <TextInput.Icon
                name={() => (
                  <MaterialIcons
                    name="directions-car"
                    color={Color.primary}
                    size={32}
                  />
                )}
              />
            }
          />
        </View>
       <View style={{alignItems:"center"}}>
       {image && (
          <Image source={{ uri: image }} style={{ width: width/1.5, height: width/1.5 }} />
        )}
       </View>
        <View style={styles.input}>
          <Button mode="contained" onPress={pickImage} color={Color.primary}>
            <Text style={{fontSize:width/30}}>Upload picture from your Device</Text>
          </Button>
        </View>
        <View style={styles.input}>
          <Text
            style={{
              textAlign: "center",
              fontSize: width/13,
              fontWeight: "bold",
              color: Color.primary,
            }}
          >
            OR
          </Text>
        </View>
        <View style={styles.input}>
          <Button mode="contained" color={Color.primary}><Text style={{fontSize:width/30}}>Click a Clear Picture</Text></Button>
        </View>
      </View>
    );
  } else if (screen === "field") {
    return (
      <View>
        <SafeAreaView>
          <ScrollView>
            <Header title="Add your Car" />
            <View style={{ marginHorizontal: 40, marginBottom: 40 }}>
              <View style={styles.input}>
                <TextInput
                  label="Car Number"
                  value={carNumber}
                  mode="outlined"
                  onChangeText={(text) => setCarNumber(text)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Car Manufacturer"
                  value={carManufacture}
                  mode="outlined"
                  onChangeText={(text) => setCarManufacture(text)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Car Model"
                  value={carModel}
                  mode="outlined"
                  onChangeText={(text) => setCarModel(text)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Mgf Date"
                  value={mgfDate}
                  mode="outlined"
                  onChangeText={(text) => setMgfDate(text)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Engine Number"
                  value={engineno}
                  mode="outlined"
                  onChangeText={(text) => setEngineno(text)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Chasis No."
                  value={chasis}
                  mode="outlined"
                  onChangeText={(text) => setChasis(text)}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  label="Registration Month"
                  value={registrationYr}
                  mode="outlined"
                  onChangeText={(text) => setRegistrationYr(text)}
                />
              </View>
              <View style={styles.input}>
                <Button mode="contained" color={Color.primary}>Submit</Button>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  input: {
    marginVertical: 10,
  },
});
AddCarScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Add Car",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "left",
    },
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Color.primary : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Color.primary,
  };
};

export default AddCarScreen;
