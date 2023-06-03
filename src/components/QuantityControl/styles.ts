import styled from 'styled-components'

export const QuantityControlContainer = styled.div`
  height: 38px;
  width: 72px;
  display: flex;
  background-color: ${(props) => props.theme['gray-400']};
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-radius: 6px;
  margin-right: 0.5rem;

  button {
    width: 24px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme['gray-400']};
    color: ${(props) => props.theme['purple-500']};
    font-weight: bold;
    cursor: pointer;
  }

  button:active {
    transform: translateY(2px);
  }

  span {
    width: 24px;
    text-align: center;
    font-size: ${(props) => props.theme['font-text-m']};
    color: ${(props) => props.theme['gray-900']};
  }
`
