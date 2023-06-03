import { MapPin, ShoppingCart } from 'phosphor-react'
import Logo from '../../assets/logo.svg'
import { CartButton, HeaderContainer, LocationBagde, Menu } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={Logo} alt="Logo" />

        <Menu>
          <li>
            <LocationBagde>
              <MapPin size={18} weight="fill" />
              Porto Alegre, RS
            </LocationBagde>
          </li>
          <li>
            <CartButton href="/cart">
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </li>
        </Menu>
      </nav>
    </HeaderContainer>
  )
}
