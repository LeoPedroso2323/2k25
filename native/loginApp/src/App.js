import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "./screens/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
  box4: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  row: {
    flexDirection: "row",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    width: 200,
    marginVertical: 20,
  },
});
