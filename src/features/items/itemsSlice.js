import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemAdded(state, action) {
      const id = action.payload;
      const items = state.items.items;
      const targetItem = items.find((item) => item.id === id);
      targetItem.count++;
    },
    itemRemoved(state, action) {
      const id = action.payload;
      const items = state.items.items;
      const targetItem = items.find((item) => item.id === id);
      targetItem.count--;
    },
  },
});

export const { itemAdded, itemRemoved } = itemsSlice.actions;

export default itemsSlice.reducer;
