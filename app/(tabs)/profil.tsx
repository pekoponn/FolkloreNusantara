import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const AppProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Folklor Nusantara</Text>
        <Text style={styles.headerSubtitle}>
          Menggali Kearifan Lokal dan Legenda Indonesia
        </Text>
      </View>

      {/* Logo Aplikasi */}
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "../../assets/images/2.png", // Ganti dengan URL logo aplikasi
          }}
          style={styles.logo}
        />
      </View>

      {/* Deskripsi Aplikasi */}
      <View style={styles.descriptionSection}>
        <Text style={styles.sectionTitle}>Tentang Aplikasi</Text>
        <Text style={styles.descriptionText}>
          Folklor Nusantara adalah aplikasi yang didedikasikan untuk melestarikan 
          dan mengenalkan cerita rakyat, legenda, dan mitos dari berbagai daerah di 
          Indonesia. Aplikasi ini bertujuan untuk menginspirasi generasi muda agar 
          lebih mencintai budaya lokal.
        </Text>
      </View>

      {/* Fitur Utama */}
      <View style={styles.featureSection}>
        <Text style={styles.sectionTitle}>Fitur Utama</Text>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>1. Koleksi Cerita Rakyat</Text>
          <Text style={styles.featureDescription}>
            Menyajikan cerita rakyat dari Sabang hingga Merauke.
          </Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>2. Audio dan Ilustrasi</Text>
          <Text style={styles.featureDescription}>
            Dengarkan cerita melalui audio dan nikmati ilustrasi menarik.
          </Text>
        </View>
        <View style={styles.featureCard}>
          <Text style={styles.featureTitle}>3. Interaktif</Text>
          <Text style={styles.featureDescription}>
            Kuis budaya untuk meningkatkan pemahaman Anda.
          </Text>
        </View>
      </View>

      {/* Tombol Mulai */}
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate("explore")}>
        <Text style={styles.startButtonText}>Mulai Jelajah</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AppProfile;

const styles = StyleSheet.create({
  // Kontainer Utama
  container: {
    flexGrow: 1,
    backgroundColor: "#F7E9D7", // Warna latar cokelat muda
    padding: 20,
  },

  // Header
  header: {
    marginBottom: 20,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6F4E37", // Warna cokelat tua
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#4E342E", // Warna cokelat gelap
    textAlign: "center",
  },

  // Logo Aplikasi
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: "#6F4E37",
  },

  // Deskripsi Aplikasi
  descriptionSection: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: "#4E342E",
    lineHeight: 22,
  },

  // Fitur Utama
  featureSection: {
    marginBottom: 30,
  },
  featureCard: {
    backgroundColor: "#D7BFA6", // Warna cokelat medium
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6F4E37",
  },
  featureDescription: {
    fontSize: 14,
    color: "#4E342E",
    marginTop: 5,
  },

  // Tombol Mulai
  startButton: {
    backgroundColor: "#6F4E37",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  startButtonText: {
    fontSize: 16,
    color: "#FFF",
    fontWeight: "bold",
  },
});
