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
        <View style={{ flex: 1 }}>

        <Link href="/edit" asChild>
            <Pressable
                style={{
                    backgroundColor: "#2196F3",
                    padding: 12,
                    borderRadius: 8,
                    margin: 10,
                }}
            >
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Dodaj notatkę</Text>
            </Pressable>
        </Link>

        <Link href="/settings" asChild>
            <Pressable
                style={{
                    backgroundColor: "#2196F3",
                    padding: 12,
                    borderRadius: 8,
                    margin: 10,
                }}
            >
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Ustawienia</Text>
            </Pressable>
        </Link>

        <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <Link href={{ pathname: "/note/[id]", params: { id: item.id.toString() } }} asChild>
                <Pressable style={{ padding: 16, borderBottomWidth: 1 }}>
                    <Text style={{ fontSize: 16 }}>{item.title}</Text>
                </Pressable>
                </Link>
            )}
        />
        </View>
    );
}
