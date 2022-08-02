import { createStore, applyMiddleware } from 'redux';
import { CounterReducer } from './Reducer/CounterReducer.js';
import thunk  from 'redux-thunk';
const CounterStore = createStore(CounterReducer, applyMiddleware(thunk));
export default CounterStore;