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
  a {
    text-decoration: none;
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};
    border-radius: 6px;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    &::after {
      content: '3';
      background-color: ${(props) => props.theme['yellow-700']};
      color: ${(props) => props.theme.white};
      position: absolute;
      top: -8px;
      right: -8px;
      font-weight: 700;
      font-size: ${(props) => props.theme['font-text-xs']};
      width: 20px;
      height: 20px;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
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
