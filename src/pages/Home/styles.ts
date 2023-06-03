import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const HomeContainer = styled.main`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  width: 100%;

  & > div {
    display: grid;
    grid-template-columns: minmax(540px, 1fr) 1fr;
    /* grid-template-columns: repeat(auto-fit, ); */
    align-items: center;
    justify-content: center;
    width: 100%;

    padding: 6rem 1rem;
  }

  @media (max-width: 900px) {
    & > div {
      grid-template-columns: 1fr;
    }
  }
`

export const HeroData = styled.div`
  max-width: 588px;
  width: 100%;

  h1 {
    margin-bottom: 1rem;
  }

  & > span {
    display: inline-block;
    margin-bottom: 3.75rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
    list-style: none;
    margin-bottom: 2rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      span {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        color: ${(props) => props.theme.white};
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${(props) => props.theme['yellow-700']};
      }

      .cart {
        background-color: ${(props) => props.theme['yellow-700']};
      }

      .timer {
        background-color: ${(props) => props.theme['yellow-500']};
      }

      .package {
        background-color: ${(props) => props.theme['gray-700']};
      }

      .coffee {
        background-color: ${(props) => props.theme['purple-500']};
      }
    }
  }
`

export const HeroImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    display: block;
  }
`
