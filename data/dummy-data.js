import React from "react";
import Category from "../models/Category";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Color from "../constants/Color";
import * as Svg from 'react-native-svg';
import { Image } from "react-native";

export const CATEGORIES = [
  new Category(
    "c1",
    "Refueling",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"150%",height:"150%"}} resizeMode="cover"/>,
    "RefuelingScreen"
  ),
  new Category(
    "c2",
    "Pollution Check",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
  new Category(
    "c3",
    "Servicing",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
  new Category(
    "c4",
    "Repairs",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
  new Category(
    "c5",
    "Insurance",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
  new Category(
    "c6",
    "Toll Charges",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
  new Category(
    "c7",
    "Car Cleaning",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
  new Category(
    "c8",
    "RTO Service",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
  new Category(
    "c9",
    "Car Finance",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
  new Category(
    "c10",
    "Parking",
    "#fff",
  <Image source={require("../assets/icons/icons-02.png")} style={{width:"100%",height:"100%"}}/>,
  "RefuelingScreen"
  ),
];
