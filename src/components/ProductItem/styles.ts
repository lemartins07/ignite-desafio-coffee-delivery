import styled from 'styled-components'

export const ProductListItem = styled.div`
  background: ${(props) => props.theme['gray-200']};
  max-width: 256px;
  min-height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem;
  border-radius: 6px 36px;
  /* position: relative; */

  img {
    margin-bottom: 0.5rem;
    /* position: absolute; */
    margin-top: -2.5rem;
    width: 120px;
    height: 120px;
  }

  .tagContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  .tag {
    padding: 4px 8px;
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 100px;
  }

  .productTitle {
    margin-bottom: 0.5rem;
  }

  .productDescription {
    text-align: center;
    font-size: ${(props) => props.theme['font-text-s']};
    margin-bottom: 2rem;
  }

  .controlPainel {
    display: flex;
    align-items: center;
    width: 100%;
  }

  .price {
    display: inline-block;
    margin-right: 1.5rem;
  }

  .addToCart {
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    border: none;

    background-color: ${(props) => props.theme['purple-700']};
    svg {
      color: #fff;
    }

    &:disabled {
      background-color: ${(props) => props.theme['purple-100']};
      cursor: not-allowed;
    }
  }
`
