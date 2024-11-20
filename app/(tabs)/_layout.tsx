import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; // Gunakan Ionicons untuk ikon

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Hilangkan tulisan
        tabBarStyle: {
          backgroundColor: "#FFF3E0", // Warna background tab
        },
        tabBarActiveTintColor: "#914F1E", // Warna ikon aktif
        tabBarInactiveTintColor: "#666", // Warna ikon non-aktif
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerTitle: "Home", // Judul header
        }}
      />
      {/* Explore Tab */}
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="earth-outline" size={size} color={color} />
          ),
          headerTitle: "Jelajahi", // Judul header
        }}
      />
      {/* Profile Tab */}
      <Tabs.Screen
        name="profil"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          headerTitle: "Profil", // Judul header
        }}
      />
    </Tabs>
  );
}
