import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";

export default function DetailsScreen() {
	return (
		<View style={{ padding: 16, gap: 12 }}>
			<Text style={{ fontSize: 22, fontWeight: "600" }}>Szczegóły notatki</Text>

			<Text>Tytuł: Przykładowa notatka</Text>
			<Text>Data: 2025-12-26</Text>
			<Text>Opis: To jest przykładowy opis.</Text>

			<Pressable
				onPress={() => router.back()}
				style={{
					height: 48,
					justifyContent: "center",
					alignItems: "center",
					borderWidth: 1,
					borderRadius: 10,
				}}
				accessibilityLabel='Wróć do listy notatek'>
				<Text>Wróć</Text>
			</Pressable>
		</View>
	);
}
