import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  width: 100%;
  padding: 2rem 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: 0.75rem;
`

export const LocationBagde = styled.span`
  padding: 0.5rem;
  background-color: ${(props) => props.theme['purple-100']};
  border-radius: 6px;
  color: ${(props) => props.theme['purple-700']};
  font-size: ${(props) => props.theme['font-text-s']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`
