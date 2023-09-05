import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../../hooks/http.hook";
import {API_URL} from "../../../consts";

export const addComment = createAsyncThunk(
    'comments/fetchComments',
    async ({portfolioId, message}, {getState}) => {
        const {token} = getState().login;
        const {request} = useHttp();
        return request(`${API_URL}/comment/${portfolioId}/create`, 'POST', {message}, token);
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

export default reducer;


