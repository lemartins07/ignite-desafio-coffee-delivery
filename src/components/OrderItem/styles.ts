import styled from 'styled-components'

export const OrderItemContainer = styled.li`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 0.5rem;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 64px;
    height: 64px;
  }

  .orderItemControl {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: start;

    .itemName {
      grid-column: 1 / 3;
      margin-bottom: 0.5rem;
    }

    button.btnRemover {
      height: 38px;
      cursor: pointer;
      border: none;
      background-color: ${(props) => props.theme['gray-400']};
      font-size: ${(props) => props.theme['font-text-xs']};

      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0 8px;
      border-radius: 6px;

      svg {
        color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`
