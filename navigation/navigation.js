import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import React from "react";

import Colors from "../constants/Color";
import { Platform } from "react-native";
import VerificationScreen from "../screens/VerficationScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation-tabs";
import NotificationScreen from "../screens/NotificationScreen";
import MenuScreen from "../screens/MenuScreen";
import RewardScreen from "../screens/RewardScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import UserScreen from "../screens/UserScreen";
import AddCarScreen from "../screens/AddCarScreen";
import RefuelingScreen from "../screens/RefuelingScreen";
import QRScanner from "../screens/QRScanner";
import PaymentSuccessScreen from "../screens/PaymentSuccessScreen";

const AppNavigator = createStackNavigator(
  {
    MenuScreen: MenuScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

const tabScreenConfig = {
  Menu: {
    screen: AppNavigator,
    navigationOptions: {
      tabBarIcon: (tabinfo) => {
        return <FontAwesome name="home" size={26} color={tabinfo.tintColor} />;
      },
      tabBarColor: Colors.primaryColor,
      tabBarLabel: "Menu",
    },
  },
  Notication: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarLabel: "Notification",
      tabBarIcon: (tabinfo) => {
        return (
          <Ionicons name="notifications" size={26} color={tabinfo.tintColor} />
        );
      },
    },
    tabBarColor: Colors.accentColor,
  },
  Reward: {
    screen: RewardScreen,
    navigationOptions: {
      tabBarLabel: "Rewards",
      tabBarIcon: (tabinfo) => {
        return (
          <FontAwesome5 name="award" size={26} color={tabinfo.tintColor} />
        );
      },
    },
    tabBarColor: Colors.accentColor,
  },
};

const BottomTabNavigator = createBottomTabNavigator(tabScreenConfig);

const MainNavigator = createDrawerNavigator({
  MealFavs: {
    screen: BottomTabNavigator,
    navigationOptions: {
      drawerLabel: "Meals",
    },
  },
});
const LoginAppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  VerficationScreen: {
    screen: VerificationScreen,
    navigationOptions: {
      header: null,
    },
  },
  MainScreen: {
    screen: MainNavigator,
    navigationOptions: {
      header: null,
    },
  },
  UserScreen: {
    screen: UserScreen,
    navigationOptions: {
      header: null,
    },
  },
  AddCarScreen: {
    screen: AddCarScreen,
    navigationOptions: {
      header: null,
    },
  },
  RefuelingScreen: {
    screen: RefuelingScreen,
    navigationOptions: {
      header: null,
    },
  },
  QRScanner:{
    screen:QRScanner,
    navigationOptions: {
      header: null,
    },
  },
  PaymentSuccessScreen:{
    screen:PaymentSuccessScreen,
    navigationOptions: {
      header: null,
    },
}
});
export default createAppContainer(LoginAppNavigator);
