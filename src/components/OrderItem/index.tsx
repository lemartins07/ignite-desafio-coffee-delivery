import { Trash } from 'phosphor-react'
import { CartContext, Product } from '../../contexts/CartContext'
import { QuantityControl } from '../QuantityControl'
import { OrderItemContainer } from './styles'
import { useContext } from 'react'
import { priceFormater } from '../../util'

interface OrderItemProps {
  product: Product
}

export function OrderItem({ product }: OrderItemProps) {
  const { addNewProduct, removeProduct } = useContext(CartContext)

  function handleRemoveProduct() {
    removeProduct(product)
  }

  function handleIncreaseAmount() {
    addNewProduct({ ...product, amount: product.amount + 1 })
  }

  function handleDecreaseAmount() {
    const amountValue = product.amount > 1 ? product.amount - 1 : 1
    addNewProduct({ ...product, amount: amountValue })
  }

  const totalPrice = priceFormater.format(product.price * product.amount)

  return (
    <OrderItemContainer>
      <img src={product.img} alt="Express" />
      <div className="orderItemControl">
        <span className="itemName text-m">{product.name}</span>
        <QuantityControl
          amount={product.amount}
          handleIncreaseAmount={handleIncreaseAmount}
          handleDecreaseAmount={handleDecreaseAmount}
        />
        <button className="btnRemover" onClick={handleRemoveProduct}>
          <Trash size={16} />
          Remover
        </button>
      </div>
      <span className="text-m bold">{totalPrice}</span>
    </OrderItemContainer>
  )
}
