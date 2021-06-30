import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
const { width } = Dimensions.get("window");
const height = width * 0.6;
const Carousel = (props) => {

  const change = ({ nativeEvent }) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );
    if (slide !== count) {
      setCount(slide);
    }
  };
  const images = [
    "https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg?cs=srgb&dl=pexels-thisisengineering-3912981.jpg&fm=jpg",
    "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];
  const [count, setCount] = useState(0);
  return (
    <View style={{ marginTop: 0 }}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        onScroll={change}
        style={{ width, height }}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width, height, resizeMode: "cover" }}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((i, k) => (
          <Text
            key={k}
            style={k == count ? styles.pagingActivetext : styles.pagingtext}
          >
            ⬤
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  pagingtext: { fontSize: width/40, color: "grey", margin: 3 },
  pagingActivetext: { fontSize: width/40, color: "white", margin: 3 },
});

export default Carousel;
