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
            const targetItem = items.find((item) => item.id === id);
            targetItem.count++;
        },
        itemRemoved(state, action) {
            const id = action.payload;
            const items = state.items;
            const targetItem = items.find((item) => item.id === id);
            targetItem.count--;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            const result = action.payload;
            state.items = result;
            state.status = "fulfilled";
        });
        builder.addCase(fetchItems.pending, (state, action) => {
            state.status = "pending";
        });

        builder.addCase(fetchItems.rejected, (state, action) => {
            state.status = "rejected";
        });
    },
});

export const { itemAdded, itemRemoved } = itemsSlice.actions;
export { fetchItems };

export function itemsSelector(state) {
    return state.items.items;
}
export function statusSelector(state) {
    return state.items.status;
}

export const selectItemById = (state, id) =>
    state.items.items.find((item) => id === item.id);

export default itemsSlice.reducer;