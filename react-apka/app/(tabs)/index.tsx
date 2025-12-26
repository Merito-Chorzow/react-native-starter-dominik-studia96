import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function NotesListScreen() {
	return (
		<View style={{ padding: 16, gap: 12 }}>
			<Text style={{ fontSize: 22, fontWeight: "600" }}>Lista notatek</Text>

			<Pressable
				onPress={() => router.push("../details")}
				style={{
					padding: 12,
					borderWidth: 1,
					borderRadius: 10,
					minHeight: 48,
					justifyContent: "center",
				}}
				accessibilityLabel='Otwórz szczegóły notatki'>
				<Text style={{ fontSize: 16 }}>Przykładowa notatka (kliknij)</Text>
				<Text style={{ opacity: 0.7 }}>2025-12-26</Text>
			</Pressable>
		</View>
	);
}
