import styled from 'styled-components'

interface WrapperProps {
  totalProducts: () => number
}

export const Wrapper = styled.span<WrapperProps>`
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

    &.cartAmount::after {
      content: '${(p) => p.totalProducts().toString()}';
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
