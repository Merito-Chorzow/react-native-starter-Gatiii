import React, { useEffect, useState } from "react";
import { View, Text, } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { fetchNoteById, Note } from "../api";

export default function NoteDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    if (id) {
      fetchNoteById(id).then((data) => {
        setNote(data);
      });
    }
  }, [id]);

  if (!note) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Nie znaleziono notatki</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        {note.title}
      </Text>
      <Text>{note.body}</Text>
    </View>
  );
}
