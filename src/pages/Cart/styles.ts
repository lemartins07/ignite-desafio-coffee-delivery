import styled from 'styled-components'

export const CartFormContainer = styled.form`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  padding-bottom: 5rem;

  & > div {
    width: 100%;
  }

  h4 {
    margin-bottom: 1rem;
  }

  @media (max-width: 912px) {
    & {
      flex-direction: column;
    }
  }
`

export const AddressForm = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  margin-bottom: 0.75rem;
  padding: 2.5rem;
  position: relative;

  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h3 {
      color: ${(props) => props.theme['gray-800']};
    }

    svg {
      color: ${(props) => props.theme['yellow-700']};
    }
  }

  .loader {
    background-color: ${(props) => props.theme['gray-200']};
    opacity: 0.7;
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .isActive {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 0.75rem;
  row-gap: 1rem;

  input {
    max-width: 200px;
    height: 42px;
    background-color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};
    border-radius: 4px;
    padding: 0.75rem;

    font-family: ${(props) => props.theme['font-normal']};
    font-weight: 400;
    font-size: ${(props) => props.theme['font-text-s']};
    line-height: 130%;
  }

  input::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  .error {
    border: 1px solid #d9534f;
  }

  #zipcode {
    grid-column: 1 / 4;
  }

  #street {
    grid-row: 2;
    grid-column: 1 / 4;
    max-width: 100%;
  }

  #number {
    grid-row: 3;
  }

  .complementContainer {
    display: grid;
    grid-column: 2 / 4;
    background-color: ${(props) => props.theme['gray-300']};
    border: 1px solid ${(props) => props.theme['gray-400']};

    span {
      font-style: italic;
      font-weight: 400;
      font-size: ${(props) => props.theme['font-text-xs']};
      color: ${(props) => props.theme['gray-600']};
      grid-column: 4 / 4;
      grid-row: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  #complement {
    grid-column: 1 / 4;
    max-width: 100%;
    border: none;
    grid-row: 1;
  }

  #district,
  #city,
  #state {
    grid-row: 4;
  }

  #state {
    max-width: 60px;
  }

  @media (max-width: 912px) {
    & {
      grid-template-columns: 1fr;

      input {
        max-width: 100%;
        width: 100%;
      }
    }

    #zipcode,
    #street,
    #number,
    .complementContainer,
    #district,
    #city,
    #state {
      grid-row: initial;
      grid-column: initial;
    }
    #state {
      max-width: 100%;
    }
  }
`

export const PaymentContainer = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;

  header {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;

    h3 {
      color: ${(props) => props.theme['gray-800']};
    }

    svg {
      color: ${(props) => props.theme['purple-500']};
    }
  }

  @media (max-width: 912px) {
    & {
      display: flex;
      flex-direction: column;
    }
  }
`

export const PaymentBox = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;

  button {
    width: 100%;
    padding: 1rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;

    background-color: ${(props) => props.theme['gray-400']};

    display: flex;
    align-items: center;
    gap: 0.75rem;

    text-transform: uppercase;
    text-wrap: nowrap;
    font-weight: 400;
    font-size: ${(props) => props.theme['font-text-xs']};
    line-height: 160%;

    text-transform: uppercase;
    color: ${(props) => props.theme['gray-700']};

    svg {
      color: ${(props) => props.theme['purple-500']};
    }

    &.active {
      background-color: ${(props) => props.theme['purple-100']};
      border: 1px solid ${(props) => props.theme['purple-500']};
    }

    &:active {
      transform: translateY(2px);
    }
  }

  &.error {
    border: 1px solid #d9534f;
  }

  @media (max-width: 912px) {
    & {
      flex-direction: column;
    }
  }
`

export const CartList = styled.div`
  max-width: 448px;
  width: 100%;

  @media (max-width: 912px) {
    max-width: 100%;
  }

  h4 {
    margin-bottom: 1rem;
  }
`
export const OrderResume = styled.div`
  background-color: ${(props) => props.theme['gray-200']};
  border-radius: 6px;
  padding: 2.5rem;
  border-radius: 6px 44px;

  ul {
    list-style: none;
  }

  @media (max-width: 912px) {
    padding: 2.5rem;
  }
`

export const OrderTotals = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.75rem;
  margin-bottom: 1.5rem;

  .totalValue,
  .totalDelivery,
  .totalOrderValue {
    text-align: right;
  }
`

export const BtnOrderConfirm = styled.button`
  background-color: ${(props) => props.theme['yellow-500']};
  border: 0;
  padding: 0.75rem 0.5rem;
  width: 100%;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme['font-text-s']};
  font-weight: 700;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
