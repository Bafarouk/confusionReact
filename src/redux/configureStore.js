import { createStore , combineReducers , applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import { Comments } from './comments';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';
import { feedbacks } from './feedbacks';


export const configureStore = () => {
    const store =createStore(
        combineReducers({
            dishes: Dishes,
            promotions: Promotions,
            leaders: Leaders,
            comments: Comments,
            feedbacks: feedbacks,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
        return store;
}