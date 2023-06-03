import { ShoppingCartSimple } from 'phosphor-react'

import expresso from '../../assets/expresso.png'
import { ProductListItem } from './styles'
import { QuantityControl } from '../QuantityControl'

export function ProductItem() {
  return (
    <ProductListItem>
      <img src={expresso} alt="Expresso" />
      <div className="tagContainer">
        <span className="tag">Tradicional</span>
        <span className="tag">Gelado</span>
        <span className="tag">Com leite</span>
      </div>
      <h3 className="productTitle">Expresso Tradicional</h3>
      <p className="productDescription">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="controlPainel">
        <span className="price">
          R$ <strong className="title-m">9,90</strong>
        </span>
        <QuantityControl />
        <button className="addToCart">
          <ShoppingCartSimple size={20} weight="fill" />
        </button>
      </div>
    </ProductListItem>
  )
}
