import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CartContainer,
  FormGrid,
  CartList,
  AddressForm,
  PaymentForm,
  PaymentBox,
  OrderResume,
  OrderTotals,
  BtnOrderConfirm,
} from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { OrderItem } from '../../components/OrderItem'

export function Cart() {
  const { products } = useContext(CartContext)

  return (
    <CartContainer className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h4 className="title-xs">Complete seu pedido</h4>
        <AddressForm>
          <header>
            <MapPinLine size={24} />
            <div>
              <h3 className="text-m">Endereço de entrega</h3>
              <p className="text-s">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </header>
          <FormGrid>
            <input name="zipcode" id="zipcode" placeholder="CEP" />
            <input name="street" id="street" placeholder="Rua" />
            <input name="number" id="number" placeholder="Número" />
            <div className="complementContainer">
              <input
                name="complement"
                id="complement"
                placeholder="Complemento"
              />
              <span>Opcional</span>
            </div>
            <input name="district" id="district" placeholder="Bairro" />
            <input name="city" id="city" placeholder="Cidade" />
            <input name="state" id="state" placeholder="UF" />
          </FormGrid>
        </AddressForm>

        <PaymentForm>
          <header>
            <CurrencyDollar size={24} />
            <div>
              <h3 className="text-m">Pagamento</h3>
              <p className="text-s">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <PaymentBox>
            <button className="active">
              <CreditCard size={16} />
              Cartão de crédito
            </button>
            <button>
              <Bank size={16} />
              Cartão de débito
            </button>
            <button>
              <Money size={16} />
              Dinheiro
            </button>
          </PaymentBox>
        </PaymentForm>
      </form>

      <CartList>
        <h4 className="title-xs">Cafés selecionados</h4>
        <OrderResume>
          <ul>
            {products &&
              products.map((product) => (
                <OrderItem key={product.id} product={product} />
              ))}
          </ul>
          <OrderTotals>
            <span className="totalItems">Total de itens</span>
            <span className="totalValue">R$ 29,70</span>
            <span className="delivery">Entrega</span>
            <span className="totalDelivery">R$ 3,50</span>
            <span className="totalOrder text-l bold">Total</span>
            <span className="totalOrderValue text-l bold">R$ 33,20</span>
          </OrderTotals>
          <BtnOrderConfirm>Confirmar Pedido</BtnOrderConfirm>
        </OrderResume>
      </CartList>
    </CartContainer>
  )
}
