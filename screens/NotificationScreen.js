import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Carousel from "../components/Carousel";
import Card from "../components/Card";
import Color from "../constants/Color";
import Header from "../components/Header";

const NotificationScreen = (props) => {
  return (
    <View style={styles.container}>
      <Header title="Notification" />
      <Card bg="white" style={{ marginBottom: 0 }}>
        <Text>this is dummy text</Text>
      </Card>
      <Card bg="white" style={{ marginBottom: 0 }}>
        <Text>this is dummy text</Text>
      </Card>
      <Card bg="white" style={{ marginBottom: 0 }}>
        <Text>this is dummy text</Text>
      </Card>
      <Card bg="white" style={{ marginBottom: 0 }}>
        <Text>this is dummy text</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: "center",

    // alignItems: "center",
    marginHorizontal: 20,
    flex: 1,
  },
});

export default NotificationScreen;
