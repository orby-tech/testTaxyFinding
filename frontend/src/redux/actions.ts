import  { FIND_CARS } from './types'


export function findCars(catalog: any) {
	return {
		type: FIND_CARS,
		findedCars: catalog
	}
}
