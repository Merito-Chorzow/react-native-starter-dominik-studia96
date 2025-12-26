import { createContext, useContext, useState, ReactNode } from "react";

export type Note = {
  id: number;
  title: string;
  description: string;
  date: string;
};

type NotesContextType = {
  notes: Note[];
  addNote: (note: Omit<Note, "id">) => void;
  getNoteById: (id: number) => Note | undefined;
};

const NotesContext = createContext<NotesContextType | null>(null);

export function NotesProvider({ children }: { children: ReactNode }) {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Przykładowa notatka",
      description: "To jest przykładowa notatka",
      date: "2025-01-01",
    },
  ]);

  const addNote = (note: Omit<Note, "id">) => {
    setNotes((prev) => [
      ...prev,
      { id: Date.now(), ...note },
    ]);
  };

  const getNoteById = (id: number) =>
    notes.find((n) => n.id === id);

  return (
    <NotesContext.Provider value={{ notes, addNote, getNoteById }}>
      {children}
    </NotesContext.Provider>
  );
}

export function useNotes() {
  const ctx = useContext(NotesContext);
  if (!ctx) throw new Error("useNotes must be used inside NotesProvider");
  return ctx;
}
