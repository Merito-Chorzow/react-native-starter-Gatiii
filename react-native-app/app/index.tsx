import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { Link } from "expo-router";
import { fetchNotes, Note } from "./api";

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetchNotes().then((data) => {
      setNotes(data);
    });
  }, []);

  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Link
          href={{ pathname: "/note/[id]", params: { id: item.id.toString() } }}
          asChild
        >
          <Pressable style={{ padding: 16, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
          </Pressable>
        </Link>
      )}
    />
  );
}
