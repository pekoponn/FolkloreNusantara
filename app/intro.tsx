// app/intro.tsx
import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function Intro() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/2.png")} // Masukkan path logo Anda
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E4C59E",
  },
  logo: {
    width: 250, // Atur ukuran logo
    height: 250,
  },
});
