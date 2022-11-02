import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { Animated, Button, StyleSheet, Text, View } from "react-native";

export default function Cau1() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };
  return (
    <View style={styles.container}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
      <Animated.View
        style={[
          styles.box,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <Text style={styles.fadingText}>Welcome to animation React Native</Text>
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    padding: 10,
    backgroundColor: "#c55bf2",
    color: "#e60404",
    // transform: [{ : "45deg" }],
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});
