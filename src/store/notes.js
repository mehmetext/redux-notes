import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
	notes: [],
	selectedColor: "#c74343",
};

const slice = createSlice({
	name: "todo",
	initialState,
});

export const useNotes = () => useSelector((state) => state.notes);

export default slice.reducer;
