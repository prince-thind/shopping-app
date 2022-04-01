import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getItems from "../../lib/getItems";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await getItems();
  return response;
});

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
  extraReducers(builder) {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      const result = action.payload;
      state.items.push(...result);
    });
  },
});

export const { itemAdded, itemRemoved } = itemsSlice.actions;
export { fetchItems };

export function itemsSelector(state) {
  return state.items.items;
}

export default itemsSlice.reducer;
