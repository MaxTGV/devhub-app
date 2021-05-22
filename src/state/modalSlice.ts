import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: false,
  reducers: {
    setModal: (state, action) => {
      return action.payload;
    },
  },
});

export const setModal = modalSlice.actions.setModal;
