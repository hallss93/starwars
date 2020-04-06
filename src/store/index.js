/**
 * @description             Create Store and apply Middlewares. 
 *                          Here is reponsibly for combine stores.
 */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import types from './types';
import initials from './initials';
import uab from 'unique-array-objects';

function repositories(state = initials.REPO_INITIAL, action) {
    switch (action.type) {
        case types.GET_PEOPLE: {
            const { data } = action;
            const { count, next, previous, results } = data
            let match = next ? next.match(/[\d]+/i) : [];
            const page = next ? match.length > 0 ? Number(match[0]) : 1 : 0
            return {
                count, next, previous, results: (uab([...state.results, ...results])), page
            };
        }
        default: return state;
    }
}

const store = createStore(repositories, applyMiddleware(thunk));


export default store;