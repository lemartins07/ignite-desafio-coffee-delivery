import { ReactNode, createContext, useReducer } from 'react'
import { cartReducer } from '../reducers/cart/reducer'
import { addNewProductAction } from '../reducers/cart/actions'

interface Product {
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

  return (
    <CartContext.Provider
      value={{
        products,
        addNewProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
