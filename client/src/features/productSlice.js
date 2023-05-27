import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
  error: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("/products");
    return response?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterdProducts(state, action) {
      state.items = state.items.filter((item) =>
        item.name.toLowerCase().includes(action.payload)
      );
    },
  },
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { filterdProducts } = productsSlice.actions;

export default productsSlice.reducer;
