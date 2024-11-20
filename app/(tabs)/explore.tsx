import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router"; // Router untuk navigasi
import { stories } from "../../constants/data.js"; // Data cerita

export default function Explore() {
  const [selectedIsland, setSelectedIsland] = useState("Semua"); // Filter default: Semua pulau
  const router = useRouter();

  // Daftar pulau
  const islands = ["Semua", "Jawa", "Sumatera", "Kalimantan", "Sulawesi", "Papua"];

  // Filter cerita berdasarkan pulau yang dipilih
  const filteredStories =
    selectedIsland === "Semua"
      ? stories
      : stories.filter((story) => story.region === selectedIsland);

  // Render setiap item cerita
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`../${item.id}`)} // Navigasi ke halaman detail
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.region}>{item.region}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Bubble Filter */}
      <Text style={styles.filterLabel}>Pilih Pulau</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.bubbleContainer}
        contentContainerStyle={styles.bubbleContent}
      >
        {islands.map((island) => (
          <TouchableOpacity
            key={island}
            style={[
              styles.bubble,
              selectedIsland === island && styles.bubbleActive,
            ]}
            onPress={() => setSelectedIsland(island)}
          >
            <Text
              style={[
                styles.bubbleText,
                selectedIsland === island && styles.bubbleTextActive,
              ]}
            >
              {island}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Daftar cerita berdasarkan filter */}
      <FlatList
        data={filteredStories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Tidak ada cerita untuk pulau yang dipilih.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  filterLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  bubbleContainer: {
    marginBottom: 16,
    overflow: "visible",
  },
  bubbleContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "#FFF3E0",
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#DDD",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 80,
    height: 36,
  },
  bubbleActive: {
    backgroundColor: "#914F1E",
    borderColor: "#914F1E",
  },
  bubbleText: {
    fontSize: 14,
    color: "#333",
    fontWeight: "normal",
    flexGrow: 1,
    textAlign: "center",
  },
  bubbleTextActive: {
    color: "#FFF",
    fontWeight: "bold",
  },
  list: {
    paddingBottom: 2,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFF3E0",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  region: {
    fontSize: 14,
    color: "#666",
  },
  emptyText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});
