import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "tomato",
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Open up App.tsx to start working!</Text>
        <TouchableOpacity
          onPress={() => {
            if (Platform.OS === "web") {
              alert("Im web");
            } else {
              Alert.alert("Im mobile");
            }
          }}
        >
          <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "gold", flex: 1 }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
