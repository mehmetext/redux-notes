import Note from "./Note";

export default function Right() {
	return (
		<div className="App-right">
			<div className="right-header">Note App</div>
			<div className="notes">
				<Note note={{ text: "deneme", color: "#c74343" }} />
				<Note
					note={{
						text: "deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2 deneme not 2",
						color: "#4ac34a",
					}}
				/>
				<Note note={{ text: "deneme", color: "#c74343" }} />
				<Note note={{ text: "deneme", color: "#565656" }} />
				<Note note={{ text: "deneme not 2", color: "#4ac34a" }} />
				<Note note={{ text: "deneme", color: "#c74343" }} />
				<Note note={{ text: "deneme not 2", color: "#4ac34a" }} />
				<Note note={{ text: "deneme", color: "#c74343" }} />
				<Note note={{ text: "deneme not 2", color: "#4ac34a" }} />
				<Note note={{ text: "deneme", color: "#c74343" }} />
				<Note note={{ text: "deneme not 2", color: "#4ac34a" }} />
			</div>
		</div>
	);
}
