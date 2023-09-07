import axios from 'axios';

export const useHttp = () => {
    const request = async (url, method = 'GET', data = null, token = null, headers =
        {'Content-Type': 'application/json'}) => {
        try {
            const config = {
                method,
                url,
                data,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json',
                },
            };
            if (token) {
                config.headers['Authorization'] = `${token}`;
            }
            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return {request};
};

