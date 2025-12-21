import axiosInstance from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST';
export const SET_ADDRESS_LOADING = 'SET_ADDRESS_LOADING';

export const setAddressList = (addresses) => ({
    type: SET_ADDRESS_LIST,
    payload: addresses,
});

export const setAddressLoading = (loading) => ({
    type: SET_ADDRESS_LOADING,
    payload: loading,
});

export const fetchAddresses = () => async (dispatch) => {
    dispatch(setAddressLoading(true));
    
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.get('/user/address', {
            headers: {
                Authorization: token,
            },
        });
        dispatch(setAddressList(response.data));
        dispatch(setAddressLoading(false));
    } catch (error) {
        console.error('Error fetching addresses:', error);
        toast.error('Failed to load addresses');
        dispatch(setAddressLoading(false));
    }
};

export const addAddress = (addressData) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.post('/user/address', addressData, {
            headers: {
                Authorization: token,
            },
        });
        toast.success('Address added successfully');
        dispatch(fetchAddresses());
        return response.data;
    } catch (error) {
        console.error('Error adding address:', error);
        toast.error('Failed to add address');
        throw error;
    }
};

export const updateAddress = (addressData) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.put('/user/address', addressData, {
            headers: {
                Authorization: token,
            },
        });
        toast.success('Address updated successfully');
        dispatch(fetchAddresses());
        return response.data;
    } catch (error) {
        console.error('Error updating address:', error);
        toast.error('Failed to update address');
        throw error;
    }
};

export const deleteAddress = (addressId) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        await axiosInstance.delete(`/user/address/${addressId}`, {
            headers: {
                Authorization: token,
            },
        });
        toast.success('Address deleted successfully');
        dispatch(fetchAddresses());
    } catch (error) {
        console.error('Error deleting address:', error);
        toast.error('Failed to delete address');
        throw error;
    }
};
