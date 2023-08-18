import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../../package/hooks/http.hook";
import {API_URL} from "../../consts";
import {getTokenFromLocalStorage, setTokenToLocalStorage} from "../../api/tokenStorage";

const registerAdapter = createEntityAdapter();

const initialToken = getTokenFromLocalStorage();

const initialState = registerAdapter.getInitialState({
    isRegistered: initialToken !== '',
    token: initialToken,
    registrationStatus: 'idle',
    isLoginFormDisplayed: true
});

export const registerUser = createAsyncThunk(
    'register/registerUser',
    async ({username, email, password, confirmPassword}, {dispatch}) => {
        const {request} = useHttp();

        const response = await request(`${API_URL}/auth/signup`, 'POST', {
            username,
            email,
            password,
            confirmPassword
        }); // This should contain the response object from your API
        setTokenToLocalStorage(response.token);
        dispatch(setToken(response.token));
        return response;
    }
);
export const registerSlice = createSlice({

    name: 'register',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
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

export const {toggleForm, setToken} = registerSlice.actions;
export default reducer;

