import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
  Dimensions,
} from "react-native";
import Color from "../constants/Color";
import * as Svg from 'react-native-svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { width } = Dimensions.get("window");

const MenuGridTile = (props) => {
  let TouchCmp = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchCmp = TouchableNativeFeedback;
  }
  return (
    <View style={{alignItems:"center"}}>
      <View style={styles.gridStyle}>
        <TouchCmp style={{ flex: 1 }} onPress={props.onSelect}>
          <View
            style={{ ...styles.container }}
          >
            {props.icon}
          </View>
        </TouchCmp>
      </View>
      <View>
        <Text
          style={styles.title}
        >
          {props.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
    // shadowColor: "black",
    // shadowOpacity: 0.26,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 10,
    // padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  gridStyle: {
    margin: width/20,
    height: width / 7,
    width: width / 7,
    // borderRadius: 12,
    // elevation: 5,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: Color.primary,
    fontSize: width / 35,
  },
});

export default MenuGridTile;
