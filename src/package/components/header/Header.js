import login from "../../../resources/image/login.png";
import profile from "../../../resources/image/profile-user.png";
import './header.scss'
import {useDispatch, useSelector} from "react-redux";
import {toggleForm} from "../../../pages/register/registerSlice";
import {Navigate, useNavigate} from "react-router-dom";
import {PATH_NAMES} from "../../../consts";
import {setIsLogged, setToken} from "../../../pages/login/loginSlice";
import React, {useState} from "react";


//TODO Make sticky header
const Header = () => {
    const isLogged = useSelector(state => state.login.isLogged);
    const userFirstName = useSelector(state => state.login.userFirstName);
    const userLastName = useSelector(state => state.login.userLastName);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogoClick = () => {
        if (isLogged) {
            // Perform logout logic here
            dispatch(setIsLogged(false));
            localStorage.removeItem('token');
            dispatch(setToken(''));
            navigate(PATH_NAMES.LOGIN);
        } else {
            // Perform login logic here
            dispatch(toggleForm());
            navigate(PATH_NAMES.LOGIN);
        }
    }

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    function handleProfileClick() {
        toggleDropdown();
    }

    return (
        <div className="header__container">
            <div className="header__body">
                <div className="header__title">ProFiler</div>
                <div className="header__menu">
                    {isLogged && (
                        <div className="header__menu-user">
                            <p> userFirstName userLastName</p>
                        </div>
                    )}
                    {isLogged && (
                        <div className="header__menu-profile">
                            <img src={profile}
                                 alt="profile-logo"
                                 onClick={handleProfileClick}/>
                            {isDropdownOpen && (
                                <div className="dropdown__menu">
                                    <div className="dropdown__menu-item">Home</div>
                                    <div className="dropdown__menu-item">About</div>
                                    <div className="dropdown__menu-item">Privet</div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="header__menu-login">
                        <img src={login} alt="login-logo" onClick={handleLogoClick}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
