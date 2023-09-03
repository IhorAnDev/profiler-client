import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";



const likesSlice = createSlice({
    name: 'likes',
    initialState: {},
    reducers: {
        toggleLike: (state, action) => {
            const { portfolioId } = action.payload;
            // Toggle the like status for the portfolio
            state[portfolioId] = !state[portfolioId];
        },
    },
});

export const { toggleLike } = likesSlice.actions;
export default likesSlice.reducer;
