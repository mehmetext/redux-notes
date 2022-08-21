import { useNotes } from "../store/notes";
import NoteColor from "./NoteColor";

export default function Left() {
	const { selectedColor } = useNotes();

	return (
		<div className="App-left">
			<div className="add-note">ADD NOTE</div>
			<textarea
				className="add-note-block"
				placeholder="type your note..."
				style={{ background: selectedColor }}
			></textarea>
			<div className="select-note-color">
				<NoteColor color="#565656" />
				<NoteColor color="#c74343" />
				<NoteColor color="#4ac34a" />
			</div>
			<div className="add-note-button">ADD</div>
		</div>
	);
}
