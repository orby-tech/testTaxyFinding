import  { combineReducers} from 'redux'


import  { FIND_CARS  } from './types'


function findedCars(state = null, action: any) {
	if (action.type === FIND_CARS) {
		return state = action.findedCars
	}	
	return state	
}
export const rootReducer = combineReducers({
    findedCars: findedCars,
  
  })