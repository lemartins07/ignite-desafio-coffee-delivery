import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { SuccessContainer } from './styles'

import biker from '../../assets/biker.svg'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { formatPaymentMethod } from '../../util'

export function Success() {
  const { order } = useContext(OrderContext)

  const { street, number, city, state, district, paymentMethod } =
    order.formData
  const complement = order.formData.complement
    ? ' - ' + order.formData.complement
    : ''

  return (
    <SuccessContainer className="container">
      <div className="order">
        <h2 className="order__title title-l">Uhu! Pedido confirmado</h2>
        <span className="order__subtitle text-l">
          Agora é só aguardar que logo o café chegará até você
        </span>
        <div className="order__container">
          <div className="order__data">
            <ul className="data__list">
              <li className="data__item">
                <div className="data__item-icone data__item-icone--purple">
                  <MapPin weight="fill" size={16} />
                </div>
                <div className="data__item-data">
                  <span className="data__data-address-1">
                    Entrega em
                    <strong>{` ${street}, ${number} ${complement} `}</strong>
                    <br />
                  </span>
                  <span className="data__data-address-2">
                    {district} - {city}, {state}
                  </span>
                </div>
              </li>
              <li className="data__item">
                <div className="data__item-icone data__item-icone--yellow-500">
                  <Timer weight="fill" size={16} />
                </div>
                <div className="data__item-data">
                  Previsão de entrega <br />
                  20 min - 30 min
                </div>
              </li>
              <li className="data__item">
                <div className="data__item-icone data__item-icone--yellow-700">
                  <CurrencyDollar size={16} />
                </div>
                <div className="data__item-data">
                  Pagamento na entrega <br />
                  {formatPaymentMethod(paymentMethod)}
                </div>
              </li>
            </ul>
          </div>
          <div className="order__img">
            <img src={biker} alt="Biker" className="order__svg" />
          </div>
        </div>
      </div>
    </SuccessContainer>
  )
}
