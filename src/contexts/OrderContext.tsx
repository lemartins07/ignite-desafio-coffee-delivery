import { ReactNode, createContext, useReducer } from 'react'
import { Order, orderReducer } from '../reducers/order/reducer'
import { createNewOrderAction } from '../reducers/order/actions'

interface OrderContextProviderProps {
  children: ReactNode
}

export interface OrderContextType {
  order: Order
  createNewOrder: (data: Order) => void
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [orderState, dispatch] = useReducer(orderReducer, {
    order: {
      products: [],
      formData: {
        zipcode: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
        paymentMethod: 'debit',
      },
    },
  })

  const { order } = orderState

  function createNewOrder(data: Order) {
    console.log('createNewOrder: ', data)
    dispatch(createNewOrderAction(data))
  }

  return (
    <OrderContext.Provider value={{ order, createNewOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
