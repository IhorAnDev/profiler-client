import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const registerAdapter = createEntityAdapter();


const initialState = registerAdapter.getInitialState({
    isRegistered: false,
    isLogged: false
});
export const registerSlice = createSlice({

    name: 'register',
    initialState,

    reducers: {
        setRegistered: (state, action) => {
            state.isRegistered = action.payload;
        },
        setLoginStatus: (state, action) => {
            state.isLogged = action.payload;
        }
    }
})

const {actions, reducer} = registerSlice;

export default reducer;

export const {setRegistered, setLoginStatus} = actions;

