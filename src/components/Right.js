import { useNotes } from "../store/notes";
import Note from "./Note";

export default function Right() {
	const { notes } = useNotes();
	return (
		<div className="App-right">
			<div className="right-header">Note App</div>
			<div className="notes">
				{notes.map((note) => (
					<Note key={note.id} note={note} />
				))}
			</div>
		</div>
	);
}
