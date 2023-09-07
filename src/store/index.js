import {configureStore} from "@reduxjs/toolkit";
import register from "../pages/register/registerSlice";
import login from "../pages/login/loginSlice";
import {apiSlice} from "../api/apiSlice";
import comments from "../package/components/comment/commentSlice";
import tokenExpirationMiddleware from "../middleware/tokenExpirationMiddleware";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({type: action});
    }
    return next(action);
};

const store = configureStore({
    reducer: {
        register,
        login,
        comments,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware()
        .concat(stringMiddleware, apiSlice.middleware, tokenExpirationMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})


export default store;
