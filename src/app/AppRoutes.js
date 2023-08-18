import {lazy, Suspense} from "react";
import {Loader} from "../package/components/loader/Loader";
import {Route, Routes} from "react-router-dom";
import {PATH_NAMES as PATH_NAME, PATH_NAMES} from "../consts";
import Header from "../package/components/header/Header";
import MainPage from "../pages/main-page/MainPage";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../pages/home/Home";


const Login = lazy(() => import("../pages/login/Login"));
const Registration = lazy(() => import("../pages/register/Registration"));
const AppRoutes = () => {

    return (
        <>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    {/*<Route exact path={PATH_NAME.HOME} element={<ProtectedRoute/>}>*/}
                        <Route exact path={PATH_NAMES.HOME} element={<Home/>}/>
                    {/*</Route>*/}
                    <Route exact path={PATH_NAMES.LOGIN} element={<Login/>}/>
                    <Route exact path={PATH_NAMES.REGISTER} element={<Registration/>}/>
                    {/*<Route exact path={PATH_NAME.MAIN} element={<ProtectedRoute/>}>*/}
                    <Route exact path={PATH_NAMES.MAIN} element={<MainPage/>}/>
                    {/*</Route>*/}
                </Routes>
            </Suspense>
        </>
    );
}

export default AppRoutes;
