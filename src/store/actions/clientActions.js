import axiosInstance from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export const SET_USER = 'SET_USER';
export const SET_ROLES = 'SET_ROLES';
export const SET_THEME = 'SET_THEME';
export const SET_LANGUAGE = 'SET_LANGUAGE';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const setRoles = (roles) => ({
    type: SET_ROLES,
    payload: roles,
});

export const setTheme = (theme) => ({
    type: SET_THEME,
    payload: theme,
});

export const setLanguage = (language) => ({
    type: SET_LANGUAGE,
    payload: language,
});

export const fetchRoles = () => async (dispatch, getState) => {
    const { client } = getState();
    
    if (client.roles && client.roles.length > 0) {
        return;
    }

    try {
        const response = await axiosInstance.get('/roles');
        dispatch(setRoles(response.data));
    } catch (error) {
        console.error('Error fetching roles:', error);
        toast.error('Failed to load roles');
    }
};

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
    try {
        const response = await axiosInstance.post('/login', credentials);
        const { token, ...userData } = response.data;

        if (rememberMe && token) {
            localStorage.setItem('token', token);
        }

        if (token) {
            axiosInstance.defaults.headers.common['Authorization'] = token;
        }

        dispatch(setUser(userData));
        return { success: true };
    } catch (error) {
        console.error('Login error:', error);
        const errorMessage = error.response?.data?.message || 'Login failed. Please check your credentials.';
        toast.error(errorMessage);
        return { success: false, error: errorMessage };
    }
};

export const verifyToken = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        return;
    }

    axiosInstance.defaults.headers.common['Authorization'] = token;

    try {
        const response = await axiosInstance.get('/verify');
        const userData = response.data;

        dispatch(setUser(userData));
        
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
            axiosInstance.defaults.headers.common['Authorization'] = response.data.token;
        }
    } catch (error) {
        console.error('Token verification failed:', error);
        localStorage.removeItem('token');
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common['Authorization'];
    dispatch(setUser(null));
    toast.info('Logged out successfully');
};
