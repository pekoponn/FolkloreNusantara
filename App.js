import React from 'react';
import { SafeAreaView } from 'react-native';
import TeamDetail from './app/team/[team]';  // Adjusted path to match the structure

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TeamDetail teamName="RRQ" />
    </SafeAreaView>
  );
}
