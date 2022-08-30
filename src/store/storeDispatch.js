import store from ".";

import { changeColor, addNote, changeResShow } from "./notes";

export const changeColorDispatch = (color) => {
	store.dispatch(changeColor(color));
};

export const addNoteDispatch = (note) => {
	store.dispatch(addNote(note));
};

export const changeResShowDispatch = () => {
	store.dispatch(changeResShow());
};
