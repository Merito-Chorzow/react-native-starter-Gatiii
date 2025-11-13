import React from "react";
import { View, Text } from "react-native";

export default function Settings() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
        Ustawienia
      </Text>

      <Text style={{ marginBottom: 10 }}>Wersja aplikacji:</Text>
      <Text>1.0.0</Text>
    </View>
  );
}
