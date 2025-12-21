import axiosInstance from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export const SET_CARD_LIST = 'SET_CARD_LIST';
export const SET_CARD_LOADING = 'SET_CARD_LOADING';

export const setCardList = (cards) => ({
    type: SET_CARD_LIST,
    payload: cards,
});

export const setCardLoading = (loading) => ({
    type: SET_CARD_LOADING,
    payload: loading,
});

export const fetchCards = () => async (dispatch) => {
    dispatch(setCardLoading(true));
    
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.get('/user/card', {
            headers: {
                Authorization: token,
            },
        });
        dispatch(setCardList(response.data));
        dispatch(setCardLoading(false));
    } catch (error) {
        console.error('Error fetching cards:', error);
        toast.error('Failed to load cards');
        dispatch(setCardLoading(false));
    }
};

export const addCard = (cardData) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.post('/user/card', cardData, {
            headers: {
                Authorization: token,
            },
        });
        toast.success('Card added successfully');
        dispatch(fetchCards());
        return response.data;
    } catch (error) {
        console.error('Error adding card:', error);
        toast.error('Failed to add card');
        throw error;
    }
};

export const updateCard = (cardData) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        const response = await axiosInstance.put('/user/card', cardData, {
            headers: {
                Authorization: token,
            },
        });
        toast.success('Card updated successfully');
        dispatch(fetchCards());
        return response.data;
    } catch (error) {
        console.error('Error updating card:', error);
        toast.error('Failed to update card');
        throw error;
    }
};

export const deleteCard = (cardId) => async (dispatch) => {
    try {
        const token = localStorage.getItem('token');
        await axiosInstance.delete(`/user/card/${cardId}`, {
            headers: {
                Authorization: token,
            },
        });
        toast.success('Card deleted successfully');
        dispatch(fetchCards());
    } catch (error) {
        console.error('Error deleting card:', error);
        toast.error('Failed to delete card');
        throw error;
    }
};
