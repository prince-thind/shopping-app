import { createSlice } from "@reduxjs/toolkit";
import getItems from "../../lib/getItems";

const initialState = {
  items: getItems(),
  status: "idle",
  error: null,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    itemAdded(state, action) {
      const id = action.payload;
      const items = state.items;
      const targetItem = items.find((item) => item.key === id);
      targetItem.count++;
    },
    itemRemoved(state, action) {
      const id = action.payload;
      const items = state.items;
      const targetItem = items.find((item) => item.key === id);
      targetItem.count--;
    },
  },
});

export const { itemAdded, itemRemoved } = itemsSlice.actions;

export function itemsSelector(state) {
  return state.items.items;
}

export default itemsSlice.reducer;
