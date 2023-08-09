import {configureStore} from "@reduxjs/toolkit";
import register from "../pages/register/registerSlice";
import login from "../pages/login/loginSlice";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({type: action});
    }
    return next(action);
};

const store = configureStore({
    reducer: {
        register, login
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;
