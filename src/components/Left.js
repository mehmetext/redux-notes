import { useState } from "react";
import { useNotes } from "../store/notes";
import NoteColor from "./NoteColor";

export default function Left() {
	const { selectedColor } = useNotes();
	const [note, setNote] = useState("");

	return (
		<div className="App-left">
			<div className="add-note">ADD NOTE</div>
			<form>
				<textarea
					className="add-note-block"
					placeholder="type your note..."
					style={{ background: selectedColor }}
					value="asds"
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
