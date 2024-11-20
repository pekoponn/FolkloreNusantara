import React from "react";
import { useSearchParams } from "expo-router";
import { stories } from "../../constants/data";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function TeamDetail() {
  const { team } = useSearchParams(); // Ambil parameter ID dari URL
  const story = stories.find((item) => item.id === team); // Temukan cerita berdasarkan ID

  if (!story) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Cerita tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={story.image} style={styles.image} />
      <Text style={styles.title}>{story.title}</Text>
      <Text style={styles.region}>Asal: {story.region}</Text>
      <Text style={styles.description}>{story.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  region: {
    fontSize: 18,
    fontWeight: "600",
    color: "#666",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: "#444",
    lineHeight: 22,
  },
  errorText: {
    fontSize: 18,
    color: "#FF0000",
    textAlign: "center",
    marginTop: 20,
  },
});
