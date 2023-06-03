import { HeroData, HeroImage, HomeContainer } from './styles'
import Hero from '../../assets/hero.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <div className="container">
        <HeroData>
          <h1 className="title-xl">
            Encontre o café perfeito <br />
            para qualquer hora do dia
          </h1>

          <span className="text-l">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <ul>
            <li>
              <span className="cart">
                <ShoppingCart weight="fill" size={13} />
              </span>
              Compra simples e segura
            </li>
            <li>
              <span className="package">
                <Package weight="fill" size={13} />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span className="timer">
                <Timer weight="fill" size={13} />
              </span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span className="coffee">
                <Coffee weight="fill" size={13} />
              </span>
              O café chega fresquinho até você
            </li>
          </ul>
        </HeroData>
        <HeroImage>
          <img src={Hero} alt="Café" />
        </HeroImage>
      </div>
    </HomeContainer>
  )
}
