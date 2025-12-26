import { View, Text } from "react-native";
import { useEffect, useState } from "react";

type Post = {
	id: number;
	title: string;
	body: string;
};

export default function AboutScreen() {
	const [post, setPost] = useState<Post | null>(null);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts/1")
			.then(res => res.json())
			.then(data => setPost(data));
	}, []);

	return (
		<View style={{ padding: 16, gap: 12 }}>
			<Text style={{ fontSize: 20, fontWeight: "600" }}>O aplikacji</Text>

			<Text>Pobrane dane z API:</Text>

			{post && (
				<>
					<Text>Tytuł: {post.title}</Text>
					<Text>Treść: {post.body}</Text>
				</>
			)}
		</View>
	);
}
