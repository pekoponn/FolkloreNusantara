import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router"; // Router untuk navigasi
import { stories } from "../constants/data.js";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function TeamDetail() {
  const { id } = useLocalSearchParams(); // Ambil parameter ID
  const router = useRouter(); // Untuk navigasi
  const story = stories.find((item) => item.id === id); // Temukan cerita sesuai ID

  // Jika cerita tidak ditemukan, tampilkan pesan error
  if (!story) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Cerita tidak ditemukan.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Detail Cerita */}
        <Image source={story.image} style={styles.image} />
        <Text style={styles.title}>{story.title}</Text>
        <Text style={styles.region}>Asal: {story.region}</Text>
        <Text style={styles.description}>{story.description}</Text>
      </ScrollView>

      {/* Tombol Back */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.replace("/explore")} // Arahkan ke halaman Explore
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
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
  backButton: {
    position: "absolute", // Posisi absolut untuk pojok kanan bawah
    bottom: 16,
    right: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#914F1E",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  backButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
