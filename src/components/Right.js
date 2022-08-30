import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useNotes } from "../store/notes";
import Note from "./Note";
import { changeResShowDispatch } from "../store/storeDispatch";

export default function Right() {
	const { notes, selectedColor } = useNotes();
	const [filter, setFilter] = useState("");
	const [filtered, setFiltered] = useState(notes);

	useEffect(() => {
		setFiltered(
			notes.filter((note) =>
				note.text
					.toLocaleLowerCase()
					.includes(filter.toLocaleLowerCase())
			)
		);
	}, [notes, filter]);

	return (
		<div className="flex-1 overflow-auto">
			<div className=" font-bold h-16 flex text-2xl items-center border-b border-b-[#474747] mb-1 p-2 sticky top-0 z-10 bg-[#404040]">
				Note App
				<span
					className="absolute right-2 w-12 h-12 flex justify-center items-center text-3xl rounded-full sm:hidden cursor-pointer pb-2"
					style={{
						background: selectedColor,
					}}
					onClick={() => {
						changeResShowDispatch();
					}}
				>
					+
				</span>
			</div>
			<div className="h-10 m-2 sticky top-[4.5rem]">
				<input
					className="bg-[#333] w-full h-full p-2 rounded-md outline-none"
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
					placeholder="Search..."
				/>
			</div>
			<ResponsiveMasonry
				columnsCountBreakPoints={{
					640: 1,
					768: 2,
					1024: 3,
					1280: 4,
					1536: 5,
				}}
			>
				<Masonry className="flex px-2" gutter={"0.5rem"}>
					{filtered.map((note) => (
						<Note key={note.id} note={note} />
					))}
				</Masonry>
			</ResponsiveMasonry>
		</div>
	);
}
