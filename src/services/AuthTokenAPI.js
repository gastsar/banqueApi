
import axios from 'axios';

export const loginUser = async (userData) => {
    try {
        const response = await axios.post('http://127.0.0.1:3001/api/v1/user/login', userData);
        return response.data;
    } catch (error) {
        throw new Error('Error during login request');
    }
};
