import { Minus, Plus } from 'phosphor-react'
import { QuantityControlContainer } from './styles'

interface QuantityControlProps {
  amount: number
  handleIncreaseAmount: () => void
  handleDecreaseAmount: () => void
}

export function QuantityControl({
  handleIncreaseAmount,
  handleDecreaseAmount,
  amount,
}: QuantityControlProps) {
  return (
    <QuantityControlContainer>
      <button
        type="button"
        className="removeQuantity"
        onClick={handleDecreaseAmount}
      >
        <Minus size={18} />
      </button>
      <span>{amount}</span>
      <button
        type="button"
        className="addQuantity"
        onClick={handleIncreaseAmount}
      >
        <Plus size={18} />
      </button>
    </QuantityControlContainer>
  )
}
