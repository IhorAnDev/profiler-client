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
                    Authorization: token ? `${token}` : '', // Include the token if it's provided
                },
            };

            const response = await axios(config);
            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return {request};
};

