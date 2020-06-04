import  { combineReducers} from 'redux'


import  { FIND_CARS , AREA, ALT_AREA } from './types'


function findedCars(state = null, action: any) {
	if (action.type === FIND_CARS) {
		return state = action.findedCars
	}	
	return state	
}
function setArea(state = null, action: any) {
	if (action.type === AREA) {
		return state = action.area
	}	
	return state	
}
function setAltArea(state = null, action: any) {
	if (action.type === ALT_AREA) {
		return state = action.area
	}	
	return state	
}
export const rootReducer = combineReducers({
	findedCars: findedCars,
	area: setArea,
	altArea: setAltArea
  
  })