import React from "react";
import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function NotesList() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Lista notatek</Text>
      <Link href="/note/1">
        <Button title="Szczegóły" />
      </Link>
      <Link href="/edit">
        <Button title="Dodaj notatkę" />
      </Link>
      <Link href="/settings">
        <Button title="Ustawienia" />
      </Link>
    </View>
  );
}