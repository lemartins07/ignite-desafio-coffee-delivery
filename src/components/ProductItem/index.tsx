import { ShoppingCartSimple } from 'phosphor-react'

import { ProductListItem } from './styles'
import { QuantityControl } from '../QuantityControl'

import { ProductProps } from '../ProductList'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface ProductItemProps {
  product: ProductProps
}

export function ProductItem({ product }: ProductItemProps) {
  const { addNewProduct, products } = useContext(CartContext)
  const [amount, setAmount] = useState(0)
  const priceFormater = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  useEffect(() => {
    products.map((productContext) =>
      productContext.id === product.id ? setAmount(productContext.amount) : 0,
    )
  }, [products, product.id])

  function handleIncreaseAmount() {
    setAmount((state) => state + 1)
  }

  function handleDecreaseAmount() {
    setAmount((state) => (state > 0 ? state - 1 : 0))
  }

  function handleAddNewProduct() {
    addNewProduct({ ...product, amount })
  }

  const priceFormated = priceFormater.format(product.price).split(' ')
  const imgPath = `../../src/assets/${product.img}`

  return (
    <ProductListItem>
      <img src={imgPath} alt="Expresso" />
      <div className="tagContainer">
        {product.tags.map((tag: string) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="productTitle">{product.name}</h3>
      <p className="productDescription">{product.description}</p>
      <div className="controlPainel">
        <span className="price">
          {priceFormated[0]}
          <strong className="title-m">{priceFormated[1]}</strong>
        </span>
        <QuantityControl
          handleIncreaseAmount={handleIncreaseAmount}
          handleDecreaseAmount={handleDecreaseAmount}
          amount={amount}
        />
        <button className="addToCart" onClick={handleAddNewProduct}>
          <ShoppingCartSimple size={20} weight="fill" />
        </button>
      </div>
    </ProductListItem>
  )
}
