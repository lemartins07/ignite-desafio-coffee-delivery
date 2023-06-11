import { produce } from 'immer'
import { ActionTypes } from './actions'
import { Product } from '../../contexts/CartContext'
import { CartFormData } from '../../pages/Cart'

export interface Order {
  products: Product[]
  formData: CartFormData
}

export interface OrderState {
  order: Order
}

export function orderReducer(state: OrderState, action: any) {
  switch (action.type) {
    case ActionTypes.CREATE_NEW_ORDER:
      return produce(state, (draft) => {
        draft.order = action.payload.newOrder
      })
    default:
      return state
  }
}
