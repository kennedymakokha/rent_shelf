import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const res = await fetch(`https://rent-space.onrender.com/api/sub-categories/66248579450d9f3a15104085`);
    return res?.json();
 });
const todoSlice = createSlice({
    name: "todo",
    initialState: {
     isLoading: false,
     data: [],
     isError: false
    },
    extraReducers: (builder) => {
     builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
     })
     builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
     })
     builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
     })
    }
   });