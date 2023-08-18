
export const getTokenFromLocalStorage = () => {
    return localStorage.getItem('token') || '';
};

export const setTokenToLocalStorage = (token) => {
    localStorage.setItem('token', token);
};
