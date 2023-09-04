import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../../hooks/http.hook";

export const addComment = createAsyncThunk(
    'comments/fetchComments',
    async ({portfolioId, message}) => {
        const {request} = useHttp();
        return request(`/api/portfolio/comment/${portfolioId}`, 'POST', {message});
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addComment.fulfilled, (state, action) => {
                state.comments.push(action.payload);
            })
            .addDefaultCase(() => {

            })
    }
});

const {actions, reducer} = commentsSlice;


