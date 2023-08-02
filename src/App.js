import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {browserHistory} from "./app/BrowserHistory";

export const App = React.memo(({children}) => {

    return (
        <Router history={browserHistory}>
            {children}
        </Router>
    )
})
