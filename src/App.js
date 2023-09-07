import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {browserHistory} from "./app/BrowserHistory";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "./pages/login/loginSlice";

export const App = React.memo(({children}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        // Simulate setting the token when the app initializes
        const initialToken = localStorage.getItem('token');
        dispatch(setToken(initialToken));

        // Start the token expiration check
        dispatch({type: 'START_TOKEN_CHECK'});

        return () => {
            // Stop the token expiration check when the component unmounts
            dispatch({type: 'STOP_TOKEN_CHECK'});
        };
    }, [dispatch]);

    return (
        <Router history={browserHistory}>
            {children}
        </Router>
    )
})
