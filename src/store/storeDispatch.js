import store from ".";

import { changeColor, addNote } from "./notes";

export const changeColorDispatch = (color) => {
	store.dispatch(changeColor(color));
};

export const addNoteDispatch = (note) => {
	store.dispatch(addNote(note));
};
