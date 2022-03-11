import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from "redux-thunk";  
import { composeWithDevTools } from 'redux-devtools-extension';
import signupreducer from './Reducer/signupreducer'


const rootreducer = combineReducers({
    signupreducer:signupreducer,
})

const instialState = {}
const  Middleware = [thunk]
const store = createStore(rootreducer,
    instialState,
    composeWithDevTools(applyMiddleware(...Middleware))
    ) 

export default store;