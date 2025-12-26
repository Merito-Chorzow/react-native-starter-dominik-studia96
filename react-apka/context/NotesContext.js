import { createContext, useState } from "react";

export const NotesContext = createContext();

export function NotesProvider({ children }) {
	const [notes, setNotes] = useState([]);

	const addNote = note =>
		setNotes(prev => [...prev, { id: Date.now(), ...note }]);

	return (
		<NotesContext.Provider value={{ notes, addNote }}>
			{children}
		</NotesContext.Provider>
	);
}
