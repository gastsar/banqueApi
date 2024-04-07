import axios from "axios";
import { GET_USER_PROFILE } from '../reducers/getUserReducer'; // Import de l'action SET_USER_PROFILE depuis votre reducer

export const getUserData = async (dispatch) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    console.error('No token found in localStorage');
    return null;
  }

  const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'accept': 'application/json'
    }
  };

  try {
    const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, config);
    
    if (response.status !== 200) {
      throw new Error('Failed to fetch user data');
    }

    const data = response.data;
    dispatch(GET_USER_PROFILE(data.body));
    return data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};

export const updateUserData = async (userData) => {
    const token = localStorage.getItem('token');
    
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`,
        'accept': 'application/json'
      }
    };
    
    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', userData, config);
      
      const data = response.data;
      
      if (response.status >= 200 && response.status < 300) {
        console.log('User data:', data);
        return data;
      } else {
        throw new Error('Failed to update profile');
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  