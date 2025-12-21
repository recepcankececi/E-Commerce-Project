import axiosInstance from '../../api/axiosInstance';
import { toast } from 'react-toastify';
import { setCart } from './shoppingCartActions';

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
