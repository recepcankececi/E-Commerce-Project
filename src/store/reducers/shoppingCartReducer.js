import { 
    SET_CART, 
    ADD_TO_CART, 
    REMOVE_FROM_CART, 
    UPDATE_CART_ITEM, 
    TOGGLE_CART_ITEM,
    SET_PAYMENT, 
    SET_ADDRESS 
} from '../actions/shoppingCartActions';
import { SET_ADDRESS_LIST, SET_ADDRESS_LOADING } from '../actions/addressActions';
import { SET_CARD_LIST, SET_CARD_LOADING } from '../actions/cardActions';

const initialState = {
    cart: [],
    payment: {},
    address: {},
    addressList: [],
    addressLoading: false,
    cardList: [],
    cardLoading: false,
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CART:
            return {
                ...state,
                cart: action.payload,
            };
        
        case ADD_TO_CART: {
            const existingItemIndex = state.cart.findIndex(
                item => item.product.id === action.payload.id
            );
            
            if (existingItemIndex >= 0) {
                const updatedCart = [...state.cart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    count: updatedCart[existingItemIndex].count + 1,
                };
                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            count: 1,
                            checked: true,
                            product: action.payload,
                        },
                    ],
                };
            }
        }
        
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.product.id !== action.payload),
            };
        
        case UPDATE_CART_ITEM: {
            const updatedCart = state.cart.map(item => {
                if (item.product.id === action.payload.productId) {
                    return {
                        ...item,
                        count: action.payload.count,
                    };
                }
                return item;
            });
            return {
                ...state,
                cart: updatedCart,
            };
        }
        
        case TOGGLE_CART_ITEM: {
            const updatedCart = state.cart.map(item => {
                if (item.product.id === action.payload) {
                    return {
                        ...item,
                        checked: !item.checked,
                    };
                }
                return item;
            });
            return {
                ...state,
                cart: updatedCart,
            };
        }
        
        case SET_PAYMENT:
            return {
                ...state,
                payment: action.payload,
            };
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            };
        case SET_ADDRESS_LIST:
            return {
                ...state,
                addressList: action.payload,
            };
        case SET_ADDRESS_LOADING:
            return {
                ...state,
                addressLoading: action.payload,
            };
        case SET_CARD_LIST:
            return {
                ...state,
                cardList: action.payload,
            };
        case SET_CARD_LOADING:
            return {
                ...state,
                cardLoading: action.payload,
            };
        default:
            return state;
    }
};

export default shoppingCartReducer;
