import { ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Wrapper } from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function CartButton() {
  const { totalProducts } = useContext(CartContext)
  const hasProducts = totalProducts() > 0 ? 'cartAmount' : ''

  return (
    <Wrapper totalProducts={totalProducts}>
      <NavLink to="/cart" className={hasProducts}>
        <ShoppingCart size={22} weight="fill" />
      </NavLink>
    </Wrapper>
  )
}
