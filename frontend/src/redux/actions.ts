import  { ALL_CATALOG, CATALOG, NEW_ARTICLES_LIST, TOP_ARTICLES_LIST } from './types'


export function setAllCatalog(catalog: any) {
	return {
		type: ALL_CATALOG,
		catalog: catalog
	}
}
