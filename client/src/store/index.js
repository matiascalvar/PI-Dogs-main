import { createStore, applyMiddleware, compose } from "redux";
import reducer from '../reducers/index';
import thunk from "redux-thunk";
import { getTemps } from "../actions";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer,  composeEnhancers(applyMiddleware(thunk)))

// TESTING
// store.dispatch(getBreeds())
store.dispatch(getTemps())