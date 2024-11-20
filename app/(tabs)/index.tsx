import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
} from "react-native";
import Intro from "../intro"; // Import intro

const HomePage = () => {
  const categories = [
    { id: "1", title: "Candi Borobudur", location: "Magelang,Jawa Tengah", image: "../../assets/images/candi_borobudur.jpg" },
    { id: "2", title: "Candi Prambana", location: "Kabupaten Sleman, Daerah Istimewa Yogyakarta", image: "../../assets/images/candi_prambanan.jpeg" },
    { id: "3", title: "Gunung Bromo", location: "Kabupaten Probolinggo,Jawa Timur", image: "../../assets/images/gunung_bromo.webp" },
    { id: "4", title: "Diamond Beach", location: "Kabupaten Klungkung, Bali", image: "../../assets/images/diamond_beach.jpg" },
  ];

  const annualEvents = [
    { id: "1", title: "Wayang Kulit", date: "seni pertunjukan tradisional Indonesia yang menampilkan tokoh-tokoh pewayangan yang dimainkan oleh dalang.", image: "../../assets/images/wayang_ulit.webp" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Selamat Datang Di Folklor Nusantara</Text>
        </View>

        {/* Jelajah Indonesia */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Jelajah Indonesia</Text>
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardLocation}>{item.location}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Agenda Tahunan */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.sectionTitle}>Budaya Indonesia</Text>
            <TouchableOpacity onPress={() => navigation.navigate("explore")}>
              <Text style={styles.viewAll}>Lihat Semua</Text>
            </TouchableOpacity>
          </View>
          {annualEvents.map((event) => (
            <View key={event.id} style={styles.eventCard}>
              <Image source={{ uri: event.image }} style={styles.eventImage} />
              <View style={styles.eventContent}>
                <Text style={styles.eventTitle}>{event.title}</Text>
                <Text style={styles.eventDate}>{event.date}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Foto Obyek Wisata */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Keragaman Budaya Indonesia</Text>
          <Image source={require("../../assets/images/budaya.webp")} style={styles.featureImage} />
        </View>
      </ScrollView>
    </View>
  );
};

export default function Index() {
  const [showIntro, setShowIntro] = useState(true);
  const fadeAnim = useRef(new Animated.Value(1)).current; 

  useEffect(() => {
    const timer = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0, 
        duration: 1000, 
        useNativeDriver: true,
      }).start(() => setShowIntro(false)); 
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  if (showIntro) {
    return (
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Intro />
      </Animated.View>
    );
  }

  return <HomePage />;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  scrollContent: { padding: 10 },
  header: { marginBottom: 20 },
  greeting: { fontSize: 20, fontWeight: "bold" },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },

  // Jelajah Indonesia Card
  card: {
    width: 150,
    marginRight: 10,
    backgroundColor: "#FFF3E0",
    borderRadius: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  cardImage: { width: "100%", height: 100, borderRadius: 8 },
  cardTitle: { fontSize: 16, fontWeight: "bold", marginTop: 5 },
  cardLocation: { fontSize: 14, color: "gray" },

  // Agenda Tahunan
  row: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  viewAll: { color: "#914F1E", fontWeight: "bold" },
  eventCard: {
    flexDirection: "row",
    backgroundColor: "#FFF3E0",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  eventImage: { width: 80, height: 80, borderRadius: 8, marginRight: 10 },
  eventContent: { flex: 1 },
  eventTitle: { fontSize: 16, fontWeight: "bold" },
  eventDate: { fontSize: 14, color: "gray" },

  // Foto Obyek Wisata
  featureImage: { width: "100%", height: 200, borderRadius: 8, marginTop: 10 },
});
