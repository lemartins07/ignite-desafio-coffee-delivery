import { ProductProps } from '../../components/ProductList'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  // eslint-disable-next-line no-unused-vars
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
  // eslint-disable-next-line no-unused-vars
  CLEAR_PRODUCTS = 'CLEAR_PRODUCTS',
}

export function addNewProductAction(newProduct: ProductProps) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function removeProductAction(product: ProductProps) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      product,
    },
  }
}

export function clearProductstAction() {
  return {
    type: ActionTypes.CLEAR_PRODUCTS,
  }
}
