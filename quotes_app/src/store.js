import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { quotesReducer } from "./reducers/quotereducer";

const reducers=combineReducers({
    quoteReducer:quotesReducer
})
const middleware=[thunk]

// to create a store
const store = createStore(reducers,applyMiddleware(...middleware));

export default store;