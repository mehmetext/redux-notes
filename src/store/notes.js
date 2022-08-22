import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

const initialState = {
	notes: [
		{
			id: "12312321",
			text: "deneme notum",
			date: "2022-08-22T07:31:38.134Z",
			color: "#565656",
		},
	],
	selectedColor: localStorage.getItem("selectedColor") ?? "#565656",
};

const slice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		changeColor: (state, action) => {
			state.selectedColor = action.payload;
			localStorage.setItem("selectedColor", action.payload);
		},
		addNote: (state, action) => {
			const note = {
				id: nanoid(),
				text: action.payload,
				date: new Date(),
				color: state.selectedColor,
			};

			state.notes = [note, ...state.notes];
		},
	},
});

export const useNotes = () => useSelector((state) => state.notes);

export const { changeColor, addNote } = slice.actions;

export default slice.reducer;
