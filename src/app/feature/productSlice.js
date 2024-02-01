import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getDataCategory = createAsyncThunk("category", async(_, thunkAPI) => {
    try {
        const response = await axios.get('https://sistemtoko.com/public/demo/cat');
        return response.data.aaData;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const getDataProduct = createAsyncThunk("product", async(_, thunkAPI) => {
    try {
        const response = await axios.get('https://sistemtoko.com/public/demo/product');
       
        return response.data.aaData;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        // Get Data category
        builder.addCase(getDataCategory.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(getDataCategory.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.category = action.payload;
        });
        builder.addCase(getDataCategory.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
        ///get data Product
        builder.addCase(getDataProduct.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(getDataProduct.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.product = action.payload;
        });
        builder.addCase(getDataProduct.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
       
      
    }
    
});

export const {reset} = productSlice.actions;
export default productSlice.reducer;