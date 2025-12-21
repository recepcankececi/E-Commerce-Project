import axiosInstance from '../../api/axiosInstance';
import { toast } from 'react-toastify';
import { setCart } from './shoppingCartActions';

export const SET_ORDERS = 'SET_ORDERS';
export const SET_ORDERS_LOADING = 'SET_ORDERS_LOADING';

export const setOrders = (orders) => ({
    type: SET_ORDERS,
    payload: orders,
});

export const setOrdersLoading = (loading) => ({
    type: SET_ORDERS_LOADING,
    payload: loading,
});

export const fetchOrders = () => async (dispatch) => {
    dispatch(setOrdersLoading(true));
    
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.get('/order', {
            headers: {
                Authorization: token,
            },
        });
        dispatch(setOrders(response.data));
        dispatch(setOrdersLoading(false));
    } catch (error) {
        console.error('Error fetching orders:', error);
        toast.error('Failed to load orders');
        dispatch(setOrdersLoading(false));
    }
};

export const createOrder = (orderData) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.post('/order', orderData, {
            headers: {
                Authorization: token,
            },
        });
        
        toast.success('Order created successfully! 🎉');
        
        // Clear the shopping cart after successful order
        dispatch(setCart([]));
        
        return response.data;
    } catch (error) {
        console.error('Error creating order:', error);
        toast.error('Failed to create order. Please try again.');
        throw error;
    }
};
