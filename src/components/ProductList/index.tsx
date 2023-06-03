import { ProductItem } from '../ProductItem'
import { ProductContainer, ProductGrid } from './styles'

export function ProductList() {
  return (
    <ProductContainer className="container">
      <h2 className="title-l">Nossos Cafés</h2>
      <ProductGrid>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductGrid>
    </ProductContainer>
  )
}
