import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs>
			<Tabs.Screen name='index' options={{ title: "Notatki" }} />
			<Tabs.Screen name='add' options={{ title: "Dodaj" }} />
			<Tabs.Screen name='about' options={{ title: "O aplikacji" }} />
		</Tabs>
	);
}
