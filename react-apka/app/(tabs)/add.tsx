import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useNotes } from "../../context/NotesContext";

export default function AddNoteScreen() {
	const { addNote } = useNotes();
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

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
			<Button
				title='Zapisz'
				onPress={() => {
					addNote({
						title,
						description,
						date: new Date().toLocaleDateString(),
					});
					router.push("../");
				}}
			/>
		</View>
	);
}
