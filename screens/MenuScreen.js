import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  FlatList,
  ScrollView,
  Dimensions,Image
} from "react-native";
import * as Svg from 'react-native-svg';
import { DrawerActions } from "react-navigation-drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/Headers/HeaderButton";
import EntypoHeaderButton from "../components/Headers/EntypoHeader";
import AntDesignHeaderButton from "../components/Headers/AntdesignHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../constants/Color";
import MenuGridScreen from "../components/MenuGrid";
const { width,height } = Dimensions.get("window");

import { CATEGORIES } from "../data/dummy-data";
import Carousel from "../components/Carousel";
import { FAB } from "react-native-paper";

const MenuScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <MenuGridScreen
        title={itemData.item.title}
        color={itemData.item.color}
        icon={itemData.item.icon}
        onSelect={() => {
          props.navigation.navigate(itemData.item.onPress);
        }}
      />
    );
  };

  return (
    <View>
      <FAB
        style={styles.fab}
        label="Add a Car"
        icon="plus"
        color="white"
        onPress={() => props.navigation.navigate("AddCarScreen")}
      />
      <ScrollView style={{ marginVertical: 10 }}>
        <View style={styles.container}>
          <Carousel />
          <View style={{ alignItems: "center" }}>
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={CATEGORIES}
              renderItem={renderGridItem}
              numColumns={4}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
MenuScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "4Wheels",
    headerTitleStyle: {
      fontWeight: "bold",
      textAlign: "center",
    },
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.dispatch(DrawerActions.toggleDrawer());
            console.log("lol");
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={EntypoHeaderButton}>
        <Item
          title="message"
          iconName="message"
          onPress={() => {
            console.log("lol");
          }}
        />
        <Item
          title="user"
          iconName="user"
          onPress={() => {
            navData.navigation.navigate({
              routeName: "UserScreen",
            });
          }}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 50,
  },
  fab: {
    position: "absolute",
    marginHorizontal: width / 30,
    right: 0,
    bottom: height/100,
    backgroundColor: Color.primary,
    zIndex: 1,
  },
});

export default MenuScreen;
