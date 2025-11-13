export type Note = {
    id: number;
    title: string;
    body: string;
};

const API_URL = "https://jsonplaceholder.typicode.com";

export async function fetchNotes(): Promise<Note[]> {
    const res = await fetch(`${API_URL}/posts?_limit=10`);
    return res.json();
}

export async function fetchNoteById(id: string): Promise<Note> {
    const res = await fetch(`${API_URL}/posts/${id}`);
    return res.json();
}
