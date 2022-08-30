import getDate from "../utils/getDate";

export default function Note({ note }) {
	return (
		<div
			style={{ backgroundColor: note.color }}
			className="p-2 bg-[#333] rounded-md shadow-md flex flex-col"
		>
			<div className="mb-1">{note.text}</div>
			<div className="border-t border-t-white border-opacity-20 text-opacity-60 text-white pt-2 flex justify-end items-center text-[10px]">
				{getDate(note.date)}
			</div>
		</div>
	);
}
