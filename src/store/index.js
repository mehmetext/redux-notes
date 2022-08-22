import { configureStore } from "@reduxjs/toolkit";
import notes from "./notes";

const store = configureStore({
	reducer: { notes },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default store;
