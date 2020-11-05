import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';
import { Errors } from 'react-redux-form';


export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload:{
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// fetch the dishes :

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

   return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok){
                return response;
            }
            else{
                // error in the server response 
                var error = new Error('Error ' + response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error => {
            // dosen t connect with the server
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message))); // catch the error
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

// fetch the comments :

export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + 'comments')
        .then(response => {
            if (response.ok){
                return response;
            }
            else{
                // error in the server response 
                var error = new Error('Error ' + response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error => {
            // dosen t connect with the server
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
}

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

// fetch the promos :

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true))

    return fetch(baseUrl + 'promotions')
        .then(response => {
            if (response.ok){
                return response;
            }
            else{
                // error in the server response 
                var error = new Error('Error ' + response.status+':'+response.statusText);
                error.response=response;
                throw error;
            }
        },
        error => {
            // dosen t connect with the server
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});