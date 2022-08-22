import getDate from "../utils/getDate";

export default function Note({ note }) {
	if (note.text.length > 240) {
		note.text = note.text.slice(0, 240) + "...";
	}

	return (
		<div style={{ backgroundColor: note.color }} className="note">
			<div className="note-text">{note.text}</div>
			<div className="note-detail">
				<div className="note-date">{getDate(note.date)}</div>
			</div>
		</div>
	);
}
