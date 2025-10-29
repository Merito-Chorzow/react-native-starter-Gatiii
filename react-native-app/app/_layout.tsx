import { Stack } from "expo-router";
import React from "react";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Notatki" }} />
      <Stack.Screen name="note/[id]" options={{ title: "Szczegóły" }} />
      <Stack.Screen name="edit" options={{ title: "Dodaj/Edytuj" }} />
      <Stack.Screen name="settings" options={{ title: "Ustawienia" }} />
    </Stack>
  );
}