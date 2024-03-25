import { profileError } from '../reducers/errorReducer';
import store from '../store/store';

export default async function updateProfile(firstName, lastName) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
        }),
    };

    try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions);
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Failed to update profile');
        }

        return data;
    } catch (error) {
        console.error('Error in updating profile:', error);

        // Dispatch profileError action
        store.dispatch(profileError());

        // Optional: You can rethrow the error if needed
        throw error;
    }
}
