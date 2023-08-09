import axios from 'axios';

export const useHttp = () => {
    const request = async (url, method = 'GET', data = null, headers =
        {'Content-Type': 'application/json'}) => {
        try {
            const response = await axios({
                method,
                url,
                data,
                headers
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    };

    return {request};
};
