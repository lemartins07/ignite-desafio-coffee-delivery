import { Minus, Plus } from 'phosphor-react'
import { QuantityControlContainer } from './styles'

export function QuantityControl() {
  return (
    <QuantityControlContainer>
      <button className="removeQuantity">
        <Minus size={18} />
      </button>
      <span>0</span>
      <button className="addQuantity">
        <Plus size={18} />
      </button>
    </QuantityControlContainer>
  )
}
