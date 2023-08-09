import {lazy, Suspense, useState} from "react";
import {Loader} from "../package/components/Loader";
import {Route, Routes} from "react-router-dom";
import {PATH_NAMES} from "../consts";
import MainPage from "../pages/main-page/MainPage";


const Login = lazy(() => import("../pages/login/Login"));
const Registration = lazy(() => import("../pages/register/Registration"));
const AppRoutes = () => {

    return (
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path={PATH_NAMES.HOME} element={<Login/>}/>
                <Route path={PATH_NAMES.REGISTER} element={<Registration/>}/>
                <Route path={PATH_NAMES.MAIN}
                       element={<MainPage/>}/>
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
