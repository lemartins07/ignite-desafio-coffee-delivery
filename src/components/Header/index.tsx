import { MapPin } from 'phosphor-react'
import Logo from '../../assets/logo.svg'
import { HeaderContainer, LocationBagde, Menu } from './styles'
import { NavLink } from 'react-router-dom'
import { CartButton } from '../CartButton'

export function Header() {
  return (
    <HeaderContainer>
      <nav className="container">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <Menu>
          <li>
            <LocationBagde>
              <MapPin size={18} weight="fill" />
              Porto Alegre, RS
            </LocationBagde>
          </li>
          <li>
            <CartButton />
          </li>
        </Menu>
      </nav>
    </HeaderContainer>
  )
}
