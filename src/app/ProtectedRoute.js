import {Navigate, Outlet, Route} from "react-router-dom";
import {PATH_NAMES} from "../consts";
import {useSelector} from "react-redux";

const ProtectedRoute = () => {
    const isLogged = useSelector(state => state.login.isLogged);
    const isRegistered = useSelector(state => state.register.isRegistered);

    return (isRegistered || isLogged) ? <Outlet/> : <Navigate to={PATH_NAMES.LOGIN}/>;
}

export default ProtectedRoute;
