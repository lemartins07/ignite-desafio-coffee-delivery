import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { SuccessContainer } from './styles'

import biker from '../../assets/biker.svg'

export function Success() {
  return (
    <SuccessContainer className="container">
      <div className="success__data">
        <h2 className="success__title title-l">Uhu! Pedido confirmado</h2>
        <span className="success__subtitle text-l">
          Agora é só aguardar que logo o café chegará até você
        </span>
        <div className="success__box">
          <ul className="success__list">
            <li className="success__item">
              <div className="success__item-icone success__item-icone--purple">
                <MapPin weight="fill" size={16} />
              </div>
              <div className="success__item-data">
                <span className="success__data-address-1">
                  Entrega em Rua João Daniel Martinelli, 102
                </span>
                <span className="success__data-address-2">
                  Farrapos - Porto Alegre, RS
                </span>
              </div>
            </li>
            <li className="success__item">
              <div className="success__item-icone success__item-icone--yellow-500">
                <Timer weight="fill" size={16} />
              </div>
              <div className="success__item-data">
                Previsão de entrega <br />
                20 min - 30 min
              </div>
            </li>
            <li className="success__item">
              <div className="success__item-icone success__item-icone--yellow-700">
                <CurrencyDollar size={16} />
              </div>
              <div className="success__item-data">
                Pagamento na entrega <br />
                Cartão de Crédito
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="success__img">
        <img src={biker} alt="Biker" className="success__svg" />
      </div>
    </SuccessContainer>
  )
}
