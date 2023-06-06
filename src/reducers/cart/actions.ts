import { ProductProps } from '../../components/ProductList'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  // eslint-disable-next-line no-unused-vars
  INITIALIZE = 'INITIALIZE',
}

export function addNewProductAction(newProduct: ProductProps) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function initializeAction(newProducts: ProductProps[]) {
  return {
    type: ActionTypes.INITIALIZE,
    payload: {
      newProducts,
    },
  }
}
