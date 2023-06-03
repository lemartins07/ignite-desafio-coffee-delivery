import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const HomeContainer = styled.main`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  width: 100%;
`

export const HeroContainer = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;

  padding-top: 6rem;
  padding-bottom: 6rem;

  @media (max-width: 900px) {
    & {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
  }
`

export const HeroData = styled.div`
  max-width: 588px;
  width: 55%;
  flex-basis: 1;

  @media (max-width: 900px) {
    & {
      width: 100%;
    }
  }

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
    row-gap: 1rem;
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
        flex-shrink: 0;
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
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 900px) {
    & {
      width: 100%;
    }
  }

  img {
    max-width: 100%;
    display: block;
  }

  @media (max-width: 900px) {
    & {
      justify-content: center;
    }
  }
`
