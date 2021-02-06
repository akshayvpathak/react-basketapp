import * as ActionTypes from './ActionTypes';

export const Basket = (state = {
    isEmpty: true,
    list: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_BASKET_ITEM:
             let itemExists=false;
        
            let newBasket = state.list.map(basketItem => {
                if(basketItem.id === action.payload.id){
                    itemExists=true;
                    return {...basketItem, count: basketItem.count+1};
                }else{
                    return basketItem;
                }
            });
        
            if(itemExists){
                return {
                    ...state,
                    isEmpty: false,
                    list: newBasket
                };
            }else{
                return {
                    ...state,
                    isEmpty: false,
                    list: [...state.list, {...action.payload}]
                };
            } 
        case ActionTypes.REMOVE_BASKET_ITEM:
            let list = state.list;
            var index = list.findIndex(basketitem => basketitem.id === action.payload.id);
            list.splice(index, 1);
            return {
                ...state,
                isEmpty: list.length ? false : true,
                list: list
            };
        case ActionTypes.DECREMENT_BASKET_ITEM:
            let isOne = false;
            let basket = state.list.map(basketItem => {
                if(basketItem.id === action.payload.id){
                    if(basketItem.count === 1){
                        isOne = true;
                        return basketItem;
                    }
                    else{
                        return {...basketItem, count: basketItem.count-1};
                    }
                }else{
                    return basketItem;
                }
            });
            if(isOne){
                let list = state.list;
                let index = list.findIndex(basketitem => basketitem.id === action.payload.id);
                list.splice(index, 1);
                return {
                ...state,
                isEmpty: list.length ? false : true,
                list: list
            };
            }
            else{
                let list = state.list;
                return {
                    ...state,
                    isEmpty: list.length ? false : true,
                    list: basket
                };
            }
        default:
            return state;
    }
}