import { changeColorDispatch } from "../store/storeDispatch";

export default function NoteColor({ color }) {
	const handleClick = () => {
		changeColorDispatch(color);
	};

	return (
		<div
			onClick={handleClick}
			className="note-color"
			style={{ background: color }}
		></div>
	);
}
