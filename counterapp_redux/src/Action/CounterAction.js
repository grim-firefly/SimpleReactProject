import { INCRESE_COUNTER, DECREASE_COUNTER, RESET_COUNTER } from '../Constant/CounterConstant';
export const onIncrement = () => {
	return {
		type: INCRESE_COUNTER
	}
}
export const onDecrement = () => {
	return {
		type: DECREASE_COUNTER
	}
}
export const onReset = () => {
	return {
		type: RESET_COUNTER
	}
}