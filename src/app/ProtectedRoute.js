import {Navigate, Outlet, Route} from "react-router-dom";
import {PATH_NAMES} from "../consts";
import {useSelector} from "react-redux";

const ProtectedRoute = () => {
    const isLogged = useSelector(state => state.login.isLogged);

    return isLogged ? <Outlet/> : <Navigate to={PATH_NAMES.LOGIN}/>;
}

export default ProtectedRoute;
