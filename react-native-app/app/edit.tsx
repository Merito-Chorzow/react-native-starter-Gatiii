import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import * as Location from "expo-location";

export default function EditNote() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
    const [errorMsg, setErrorMsg] = useState("");

    const getLocation = async () => {
        // prośba o uprawnienia
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Brak uprawnien");
            return;
        }

        // pobranie pozycji
        const pos = await Location.getCurrentPositionAsync({});
        setLocation({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
        });
    };

    const handleSave = () => {
        console.log("Zapisano notatkę:", { title, description, location });
        alert("Notatka zapisana");
        setTitle("");
        setDescription("");
        setLocation(null);
    };

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Dodaj nową notatkę</Text>

        <TextInput
            placeholder="Tytuł notatki"
            value={title}
            onChangeText={setTitle}
            style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                padding: 10,
                marginBottom: 10,
            }}
        />

        <TextInput
            placeholder="Tresc notatki"
            value={description}
            onChangeText={setDescription}
            multiline
            style={{
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 8,
                padding: 10,
                height: 100,
                marginBottom: 10,
            }}
        />

        <Pressable
            onPress={getLocation}
            style={{
                backgroundColor: "#4CAF50",
                padding: 10,
                borderRadius: 8,
                marginBottom: 10,
            }}
        >
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Pobierz lokalizację GPS</Text>
        </Pressable>

        {location && (
            <Text>Twoja lokalizacja: {location.lat.toFixed(4)}, {location.lon.toFixed(4)}</Text>
        )}
        {errorMsg ? <Text style={{ color: "red" }}>{errorMsg}</Text> : null}

        <Pressable
            onPress={handleSave}
            style={{
                backgroundColor: "#2196F3",
                padding: 10,
                borderRadius: 8,
                marginTop: 20,
            }}
        >
            <Text style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>Zapisz notatkę</Text>
        </Pressable>
        </View>
    );
    }
