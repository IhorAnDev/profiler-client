import jwt_decode from 'jwt-decode';
import {isTokenCloseToExpiry, refreshToken, setToken} from '../pages/login/loginSlice';
import {useHttp} from "../package/hooks/http.hook";
import {API_URL} from "../consts";

let tokenCheckInterval;

const startTokenCheck = (store) => {
    tokenCheckInterval = setInterval(async () => {
        console.log('Checking token...');
        const state = store.getState();
        console.log(state);
        if (isTokenCloseToExpiry(state)) {
            console.log('Refreshing token...');
            try {
                const {request} = useHttp(); // Initialize your custom HTTP request function
                const response = await request(`${API_URL}/auth/refresh`, 'POST', null, state.login.token);

                if (response.token) {
                    // Dispatch the refreshToken action to update the token in the Redux store
                    store.dispatch(refreshToken(response.token));
                    localStorage.setItem('token', response.token);
                } else {
                    // Handle token refresh failure, e.g., by logging the user out
                    // You can dispatch an action to clear the token and log the user out
                    // store.dispatch(logoutAction());
                }
            } catch (error) {
                // Handle errors, e.g., network errors or API request failures
                console.error('Token refresh failed:', error);
            }
        }
    }, 600000); // Check every minute
};

const stopTokenCheck = () => {
    clearInterval(tokenCheckInterval);
};

const tokenExpirationMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case 'START_TOKEN_CHECK':
            startTokenCheck(store);
            break;
        case 'STOP_TOKEN_CHECK':
            stopTokenCheck();
            break;
        default:
            break;
    }

    return next(action);
};

export default tokenExpirationMiddleware;
