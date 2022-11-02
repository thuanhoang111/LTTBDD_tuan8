import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Button,
  Image,
  PanResponder,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";

const Cau2 = () => {
  const [x, setX] = useState(0);
  console.log(x);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setX(x + 100);
        }}
      >
        <Animated.View style={[styles.box, { transform: [{ translateX: x }] }]}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("./img/icons8-non-stop-flight-16.png")}
          ></Image>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    padding: 20,
    borderRadius: 4,
  },
});

export default Cau2;
