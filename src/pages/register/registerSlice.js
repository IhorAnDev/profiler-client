import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../../package/hooks/http.hook";

const registerAdapter = createEntityAdapter();

const initialToken = localStorage.getItem('token') || '';

const initialState = registerAdapter.getInitialState({
    isRegistered: false,
    token: initialToken,
    registrationStatus: 'idle',
    isLoginFormDisplayed: true
});

export const registerUser = createAsyncThunk(
    'register/registerUser',
    async ({username, email, password, confirmPassword}) => {
        const {request} = useHttp();

        const response = await request('http://localhost:8085/api/auth/signup', 'POST', {
            username,
            email,
            password,
            confirmPassword
        }); // This should contain the response object from your API
        localStorage.setItem('token', response.token);
        return response;
    }
);
export const registerSlice = createSlice({

    name: 'register',
    initialState,
    reducers: {
        toggleForm: (state) => {
            state.isLoginFormDisplayed = !state.isLoginFormDisplayed;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state, action) => {
                state.registrationStatus = 'loading';
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.registrationStatus = 'idle';
                state.isRegistered = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.registrationStatus = 'failed';
            })
    }
})

const {reducer} = registerSlice;

export const {toggleForm} = registerSlice.actions;
export default reducer;

