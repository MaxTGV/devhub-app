import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { contactsSlice } from "./state/contactsSlice";
import { modalSlice } from "./state/modalSlice";

const reducer = {
  contacts: contactsSlice.reducer,
  modal: modalSlice.reducer,
};

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
