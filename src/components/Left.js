import { useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import { useNotes } from "../store/notes";
import { addNoteDispatch } from "../store/storeDispatch";
import NoteColor from "./NoteColor";
import { changeResShowDispatch } from "../store/storeDispatch";

export default function Left() {
	const { selectedColor, responsiveShow } = useNotes();
	const [note, setNote] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (note) {
			addNoteDispatch(note);
			setNote("");
		}
	};

	return (
		<div
			className={`h-full bg-[#333] absolute left-0 top-0 w-full z-20 sm:w-[300px] sm:relative sm:visible ${
				responsiveShow ? "visible" : "invisible"
			}`}
		>
			<div className="font-bold h-16 flex text-2xl justify-center items-center border-b border-b-[#474747] mb-3">
				ADD NOTE
				<span
					className="absolute right-2 w-12 h-12 flex justify-center items-center text-3xl rounded-full sm:hidden cursor-pointer pb-2"
					style={{
						background: selectedColor,
					}}
					onClick={() => {
						changeResShowDispatch();
					}}
				>
					x
				</span>
			</div>
			<form onSubmit={handleSubmit}>
				<ReactTextareaAutosize
					className="resize-none w-full p-3 bg-[#2a2a2a] text-white outline-none placeholder:text-opacity-40 placeholder:text-white"
					placeholder="type your note..."
					style={{ background: selectedColor }}
					value={note}
					onChange={(e) => setNote(e.target.value)}
					minRows={8}
					maxRows={12}
				/>
				<div className="flex p-1">
					<NoteColor color="#565656" />
					<NoteColor color="#c74343" />
					<NoteColor color="#4ac34a" />
					<NoteColor color="#4a88c3" />
					<NoteColor color="#6d4ac3" />
					<NoteColor color="#c34a9a" />
				</div>
				<button className="w-[calc(100%-1rem)] bg-[#404040] m-2 mt-1 h-12 flex justify-center items-center text-xl font-bold rounded-full cursor-pointer select-none">
					ADD
				</button>
			</form>
		</div>
	);
}
