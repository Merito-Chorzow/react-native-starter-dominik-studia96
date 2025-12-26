import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { useNotes } from "../../context/NotesContext";

export default function NotesListScreen() {
	const { notes } = useNotes();

	return (
		<View style={{ padding: 16, gap: 12 }}>
			<Text style={{ fontSize: 22, fontWeight: "600" }}>Lista notatek</Text>

			{notes.map(note => (
				<Pressable
					key={note.id}
					onPress={() => router.push(`../details?id=${note.id}`)}
					style={{
						padding: 12,
						borderWidth: 1,
						borderRadius: 10,
						minHeight: 48,
						justifyContent: "center",
					}}
					accessibilityLabel='Otwórz szczegóły notatki'>
					<Text style={{ fontSize: 16 }}>{note.title}</Text>
					<Text style={{ opacity: 0.7 }}>{note.date}</Text>
				</Pressable>
			))}
		</View>
	);
}
