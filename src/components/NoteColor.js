import { changeColorDispatch } from "../store/storeDispatch";

export default function NoteColor({ color }) {
	const handleClick = () => {
		changeColorDispatch(color);
	};

	return (
		<div
			onClick={handleClick}
			className="h-6 w-6 rounded-full m-1 border-2 border-transparent cursor-pointer"
			style={{ background: color }}
		></div>
	);
}
