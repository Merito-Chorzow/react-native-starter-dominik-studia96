import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useNotes } from "../../context/NotesContext";
import * as Location from "expo-location";

export default function AddNoteScreen() {
	const { addNote } = useNotes();

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState<{
		latitude: number;
		longitude: number;
	} | null>(null);

	const getLocation = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== "granted") {
			alert("Brak zgody na lokalizację");
			return;
		}

		const pos = await Location.getCurrentPositionAsync({});
		setLocation({
			latitude: pos.coords.latitude,
			longitude: pos.coords.longitude,
		});
	};

	return (
		<View style={{ padding: 16, gap: 12 }}>
			<TextInput
				placeholder='Tytuł'
				value={title}
				onChangeText={setTitle}
				style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
			/>

			<TextInput
				placeholder='Opis'
				value={description}
				onChangeText={setDescription}
				style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}
			/>

			<Button title='Pobierz lokalizację GPS' onPress={getLocation} />

			<Button
				title='Zapisz'
				onPress={() => {
					addNote({
						title,
						description,
						date: new Date().toLocaleDateString(),
						location: location ?? undefined,
					});
					router.push("../");
				}}
			/>
		</View>
	);
}
