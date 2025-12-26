import { View, Text, Pressable } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useNotes } from "../context/NotesContext";

export default function DetailsScreen() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const { getNoteById } = useNotes();

	const note = getNoteById(Number(id));

	if (!note) {
		return (
			<View style={{ padding: 16 }}>
				<Text>Nie znaleziono notatki</Text>
			</View>
		);
	}

	return (
		<View style={{ padding: 16, gap: 12 }}>
			<Text style={{ fontSize: 22, fontWeight: "600" }}>{note.title}</Text>
			<Text>{note.date}</Text>
			<Text>{note.description}</Text>

			<Pressable
				onPress={() => router.back()}
				style={{
					height: 48,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1,
					borderRadius: 10,
				}}>
				<Text>Wróć</Text>
			</Pressable>
		</View>
	);
}
