import { useEffect, useState } from 'react'
import { ProductItem } from '../ProductItem'
import { ProductContainer, ProductGrid } from './styles'

export interface ProductProps {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  img: string
}

export function ProductList() {
  const [products, setProducts] = useState<ProductProps[] | []>([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('../../src/db.json')
      const data = await response.json()

      setProducts(data)
    }

    fetchData()
  }, [])

  return (
    <ProductContainer className="container">
      <h2 className="title-l">Nossos Cafés</h2>
      <ProductGrid>
        {products.length > 0 &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </ProductGrid>
    </ProductContainer>
  )
}
