import * as ActionTypes from './ActionTypes';

export const feedbacks = (state = {
    errMess: null,
    feedbacks: []
}, action) => {
    switch(action.type){
        
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {...state, feedbacks: state.feedbacks.concat(feedback)};

        default: 
            return state;
    }
}