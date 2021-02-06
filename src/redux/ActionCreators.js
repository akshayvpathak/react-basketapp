import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

export const fetchGrocery = () => (dispatch) => {
    dispatch(groceryLoading(true));
    return fetch( baseUrl + 'grocery')
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ':'+ response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(grocery=> dispatch(addGrocery(grocery)))
    .catch(error => dispatch(groceryFailed(error.message)));
}

export const groceryLoading = ()  => (dispatch) => ({
    type: ActionTypes.GROCERY_LOADING
});

export const groceryFailed = (errmess) => ({
    type: ActionTypes.GROCERY_FAILED,
    payload: errmess
});

export const addGrocery = (grocery) => ({
    type: ActionTypes.ADD_GROCERY,
    payload: grocery
});

export const addbasketitem = (basketitem) =>({
 type: ActionTypes.ADD_BASKET_ITEM,
 payload: basketitem   
})
export const removebasketitem = (basketitem) =>({
    type: ActionTypes.REMOVE_BASKET_ITEM,
    payload: basketitem   
})

export const decrementbasketitem = (basketitem) =>({
    type: ActionTypes.DECREMENT_BASKET_ITEM,
    payload: basketitem   
})

