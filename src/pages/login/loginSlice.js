import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {useHttp} from "../../package/hooks/http.hook";
import {API_URL} from "../../consts";
import {getTokenFromLocalStorage, setTokenToLocalStorage} from "../../api/tokenStorage";

const registerAdapter = createEntityAdapter();

const initialToken = getTokenFromLocalStorage();

const initialState = registerAdapter.getInitialState({
    isLogged: initialToken !== '',
    token: initialToken,
    userFirstName: '',
    userLastName: '',
    loginStatus: 'idle'
});

export const loginUser = createAsyncThunk(
    'login/loginUser',
    async ({username, password}, {dispatch}) => {
        const {request} = useHttp();

        const response = await request(`${API_URL}/auth/login`, 'POST', {
            username,
            password
        }); // This should contain the response object from your API
        setTokenToLocalStorage(response.token)
        dispatch(setToken(response.token));
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
        },
        setUserFirstName: (state, action) => {
            state.userFirstName = action.payload;
        },
        setUserLastName: (state, action) => {
            state.userLastName = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loginStatus = 'loading';
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loginStatus = 'idle';
                state.isLogged = true;
                state.userFirstName = action.payload.firstName;
                state.userLastName = action.payload.lastName;
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



