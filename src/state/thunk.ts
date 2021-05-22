import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContactsList } from "../shared/api";
import { Contacts } from "../types";

export const fetchContacts = createAsyncThunk<Contacts[]>(
  "contacts/fetchContacts",
  async () => {
    const api =  await getContactsList();
    console.log(api);
    return api;
  }
);
