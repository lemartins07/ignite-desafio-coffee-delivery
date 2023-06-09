import { MapPin } from 'phosphor-react'
import Logo from '../../assets/logo.svg'
import { HeaderContainer, LocationBagde, Menu } from './styles'
import { NavLink } from 'react-router-dom'
import { CartButton } from '../CartButton'
import { useEffect, useState } from 'react'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      const isScrolled = window.scrollY > 104
      setScrolled(isScrolled)
      console.log(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer className={scrolled ? 'scrolled' : ''}>
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
