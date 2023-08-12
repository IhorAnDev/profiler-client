import login from "../../resources/image/login.png";
import './header.scss'
import {useDispatch, useSelector} from "react-redux";
import {toggleForm} from "../register/registerSlice";
import {Navigate, useNavigate} from "react-router-dom";
import {PATH_NAMES} from "../../consts";
import {setIsLogged} from "../login/loginSlice";
import React from "react";

const Header = () => {

    const dispatch = useDispatch();


    const navigate = useNavigate();

    const handleLogoClick = () => {
        dispatch(toggleForm());
        navigate(PATH_NAMES.LOGIN);
        dispatch(setIsLogged(false));
        localStorage.removeItem('token');
    }

    return (
        <div className="header__container">
            <div className="header__body">
                <div className="header__title">ProFiler</div>
                <div className="header__logo" onClick={handleLogoClick}>
                    <img src={login} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default Header;
