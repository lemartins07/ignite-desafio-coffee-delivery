import { ReactNode, createContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import {
  addNewProductAction,
  clearProductstAction,
  removeProductAction,
} from '../reducers/cart/actions'

export interface Product {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  img: string
  amount: number
}

interface CartContextType {
  products: Product[]
  addNewProduct: (product: Product) => void
  totalProducts: () => number
  removeProduct: (product: Product) => void
  clearProducts: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    products: [],
  })

  const { products } = cartState

  function addNewProduct(product: Product) {
    dispatch(addNewProductAction(product))
  }

  function removeProduct(product: Product) {
    dispatch(removeProductAction(product))
  }

  function totalProducts() {
    return products.length
  }

  function clearProducts() {
    dispatch(clearProductstAction())
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addNewProduct,
        totalProducts,
        removeProduct,
        clearProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
