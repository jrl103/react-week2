import {createStore, combineReducers, applyMiddleware, compose} from "redux";
                                    // 미들웨어 위한 훅 2개                        

import thunk from "redux-thunk";

import word from "./modules/word";

const middlewares = [thunk];
const rootReducer = combineReducers({word}); // 리듀서
const enhancer = applyMiddleware(...middlewares); //미들웨어 묶기(옵셔널한 것들)

const store = createStore(rootReducer, enhancer);

export default store;