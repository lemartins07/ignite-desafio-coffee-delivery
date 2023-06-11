import { Order } from './reducer'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  CREATE_NEW_ORDER = 'ADD_NEW_ORDER',
}

export function createNewOrderAction(newOrder: Order) {
  return {
    type: ActionTypes.CREATE_NEW_ORDER,
    payload: {
      newOrder,
    },
  }
}
