import styled from 'styled-components'

export const ProductContainer = styled.section`
  padding-top: 5rem;
  padding-bottom: 10rem;

  h2 {
    margin-bottom: 3.75rem;
  }
`

export const ProductGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`
