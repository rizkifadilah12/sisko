import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    blog: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

export const getDataBlog = createAsyncThunk("blog", async(_, thunkAPI) => {
    try {
        const response = await axios.get('https://demo.sistemtoko.com/demo/blog');
        return response.data.aaData;
    } catch (error) {
        if(error.response){
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }
    }
});



export const blogSLice = createSlice({
    name: "blog",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers:(builder) =>{
        // Get Data category
        builder.addCase(getDataBlog.pending, (state) =>{
            state.isLoading = true;
        });
        builder.addCase(getDataBlog.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.isSuccess = true;
            state.blog = action.payload;
        });
        builder.addCase(getDataBlog.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
       
      
    }
    
});

export const {reset} = blogSLice.actions;
export default blogSLice.reducer;