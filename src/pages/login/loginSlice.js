import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../../package/hooks/http.hook";

const registerAdapter = createEntityAdapter();

const initialToken = localStorage.getItem('token') || '';

const initialState = registerAdapter.getInitialState({
    isLogged: initialToken !== '',
    token: initialToken,
    loginStatus: 'idle'
});

export const loginUser = createAsyncThunk(
    'login/loginUser',
    async ({username, password}) => {
        const {request} = useHttp();

        const response = await request('http://localhost:8085/api/auth/login', 'POST', {
            username,
            password
        }); // This should contain the response object from your API
        localStorage.setItem('token', response.token);
        return response;
    }
);
export const loginSlice = createSlice({
    name: 'login',
    initialState,

    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loginStatus = 'loading';
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.loginStatus = 'idle';
                state.isLogged = true;
            })
            .addCase(loginUser.rejected, (state) => {
                state.loginStatus = 'failed';
                state.isLogged = false;
            })
    }
})

const {reducer} = loginSlice;

export const {setToken, setIsLogged} = loginSlice.actions;

export default reducer;



