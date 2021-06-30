import React, { useState } from "react";
import { View,Button, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Modal from "react-native-modal";
// import ScratchView from 'react-native-scratchcards'

const RewardScreen = (props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
     <Text>This is Rewards Section</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default RewardScreen;
