import axiosInstance from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export const SET_USER = 'SET_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const SET_LOADING = 'SET_LOADING';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const logoutUser = () => ({
    type: LOGOUT_USER,
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: loading,
});

export const loginUser = (credentials, rememberMe) => async (dispatch) => {
    dispatch(setLoading(true));
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
    } finally {
        dispatch(setLoading(false));
    }
};

export const checkStoredToken = () => async (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = token;
        try {
            const response = await axiosInstance.get('/verify');
            dispatch(setUser(response.data));
        } catch (error) {
            localStorage.removeItem('token');
            delete axiosInstance.defaults.headers.common['Authorization'];
        }
    }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('token');
    delete axiosInstance.defaults.headers.common['Authorization'];
    dispatch(logoutUser());
    toast.info('Logged out successfully');
};
