import { createSlice } from "@reduxjs/toolkit";
import { Contacts } from "../types";
import { fetchContacts } from "./thunk";

export const contactsSlice = createSlice({
  name: "contactsSlice",
  initialState: [] as Contacts[],
  reducers: {
    addContact: (state, action) => {
      return [...state, action.payload];
    },
    removeContact: (state, action) => {
      const newArr = state.filter(
        (contact: Contacts) => contact.id !== action.payload
      );
      return [...newArr];
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled.toString()]: (state, action) => {
      return action.payload;
    },
  },
});

export const addContact = contactsSlice.actions.addContact;
export const removeContact = contactsSlice.actions.removeContact;
