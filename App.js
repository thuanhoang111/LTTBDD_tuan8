import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Cau1 from "./Cau1";
import Cau2 from "./Cau2";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Cau1></Cau1>
      <Cau2></Cau2>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
