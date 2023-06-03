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
} from './styles'

export function Cart() {
  return (
    <CartContainer className="container">
      <form onSubmit={(e) => e.preventDefault()}>
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

      <CartList></CartList>
    </CartContainer>
  )
}
