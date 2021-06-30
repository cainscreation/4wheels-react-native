import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Color from "../constants/Color";

const Header = (props) => {
  return (
    <View style={{ marginTop: 50,}}>
      <Text
        style={{
          fontSize: 22,
          textAlign: "center",
          color: Color.primary,
          fontWeight: "bold",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
