import { onIncrement, onDecrement, onReset } from '../Action/CounterAction.js';
import { INCRESE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from '../Constant/CounterConstant';

const initialState = {
	value: 0
}
export const CounterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCRESE_COUNTER:
			return {
				...state,
				value: state.value + 1
			};
		case DECREASE_COUNTER:
			return {
				...state,
				value : state.value>0 ?  state.value - 1: 0
			};
		case RESET_COUNTER:
			return {
				...state,
				value: 0
			};
		default:
			return state;
	}
}