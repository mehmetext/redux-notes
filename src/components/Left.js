import { useState } from "react";
import { useNotes } from "../store/notes";
import { addNoteDispatch } from "../store/storeDispatch";
import NoteColor from "./NoteColor";

export default function Left() {
	const { selectedColor } = useNotes();
	const [note, setNote] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (note) {
			addNoteDispatch(note);
			setNote("");
		}
	};

	return (
		<div className="App-left">
			<div className="add-note">ADD NOTE</div>
			<form onSubmit={handleSubmit}>
				<textarea
					className="add-note-block"
					placeholder="type your note..."
					style={{ background: selectedColor }}
					value={note}
					onChange={(e) => setNote(e.target.value)}
				></textarea>
				<div className="select-note-color">
					<NoteColor color="#565656" />
					<NoteColor color="#c74343" />
					<NoteColor color="#4ac34a" />
				</div>
				<button className="add-note-button">ADD</button>
			</form>
		</div>
	);
}
