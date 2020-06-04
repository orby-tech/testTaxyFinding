import  { FIND_CARS, AREA, ALT_AREA } from './types'


export function findCars(catalog: any) {
	return {
		type: FIND_CARS,
		findedCars: catalog
	}
}

export function setArea(catalog: any) {
	return {
		type: AREA,
		area: catalog
	}
}
export function setAltArea(catalog: any) {
	return {
		type: ALT_AREA,
		area: catalog
	}
}