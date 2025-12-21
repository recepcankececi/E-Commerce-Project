import axiosInstance from '../../api/axiosInstance';
import { toast } from 'react-toastify';

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCT_LIST = 'SET_PRODUCT_LIST';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_FETCH_STATE = 'SET_FETCH_STATE';
export const SET_LIMIT = 'SET_LIMIT';
export const SET_OFFSET = 'SET_OFFSET';
export const SET_FILTER = 'SET_FILTER';
export const SET_SORT = 'SET_SORT';

export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories,
});

export const setProductList = (productList) => ({
    type: SET_PRODUCT_LIST,
    payload: productList,
});

export const setTotal = (total) => ({
    type: SET_TOTAL,
    payload: total,
});

export const setFetchState = (fetchState) => ({
    type: SET_FETCH_STATE,
    payload: fetchState,
});

export const setLimit = (limit) => ({
    type: SET_LIMIT,
    payload: limit,
});

export const setOffset = (offset) => ({
    type: SET_OFFSET,
    payload: offset,
});

export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const setSort = (sort) => ({
    type: SET_SORT,
    payload: sort,
});

export const fetchCategories = () => async (dispatch) => {
    try {
        const response = await axiosInstance.get('/categories');
        dispatch(setCategories(response.data));
    } catch (error) {
        console.error('Error fetching categories:', error);
        toast.error('Failed to load categories');
    }
};

export const fetchProducts = (params = {}) => async (dispatch) => {
    dispatch(setFetchState('FETCHING'));
    
    try {
        const queryParams = new URLSearchParams();
        
        if (params.category) queryParams.append('category', params.category);
        if (params.filter) queryParams.append('filter', params.filter);
        if (params.sort) queryParams.append('sort', params.sort);
        if (params.limit) queryParams.append('limit', params.limit);
        if (params.offset) queryParams.append('offset', params.offset);
        
        const url = `/products${queryParams.toString() ? `?${queryParams.toString()}` : ''}`;
        const response = await axiosInstance.get(url);
        
        dispatch(setProductList(response.data.products));
        dispatch(setTotal(response.data.total));
        dispatch(setFetchState('FETCHED'));
    } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to load products');
        dispatch(setFetchState('FAILED'));
    }
};
