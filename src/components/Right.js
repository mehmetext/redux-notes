import { useEffect, useState } from "react";
import { useNotes } from "../store/notes";
import Note from "./Note";

export default function Right() {
	const { notes } = useNotes();
	const [filter, setFilter] = useState("");
	const [filtered, setFiltered] = useState(notes);

	useEffect(() => {
		setFiltered(notes.filter((note) => note.text.includes(filter)));
	}, [notes, filter]);

	return (
		<div className="App-right">
			<div className="right-header">Note App</div>
			<div className="search">
				<input
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					placeholder="Search..."
				/>
			</div>
			<div className="notes">
				{filtered.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</div>
		</div>
	);
}
