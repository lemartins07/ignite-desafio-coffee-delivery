import { Product } from '../../contexts/CartContext'
import { ActionTypes } from './actions'
import { produce } from 'immer'

interface CartState {
  products: Product[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return produce(state, (draft) => {
        const productIndex = state.products.findIndex(
          (product) => product.id === action.payload.newProduct.id,
        )
        if (productIndex > -1) {
          draft.products[productIndex].amount +=
            action.payload.newProduct.amount
        } else if (action.payload.newProduct.amount > 0) {
          draft.products.push(action.payload.newProduct)
        }
      })
    case ActionTypes.INITIALIZE:
      return produce(state, (draft) => {
        draft.products = action.payload.newProducts
      })
    default:
      return state
  }
}
