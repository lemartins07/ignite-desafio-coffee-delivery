import styled from 'styled-components'

export const SuccessContainer = styled.section`
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  padding-top: 6rem;

  @media (max-width: 912px) {
    & {
      flex-direction: column;
      padding-top: 3rem;
    }
  }

  .order {
    &__title {
      color: ${(props) => props.theme['yellow-700']};
    }

    &__subtitle {
      color: ${(props) => props.theme['gray-800']};
      display: inline-block;
      margin-bottom: 2.5rem;
    }

    &__container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 2rem;

      @media (max-width: 912px) {
        flex-direction: column;
      }
    }

    &__data {
      background: linear-gradient(
        102.89deg,
        ${(props) => props.theme['yellow-500']} 2.61%,
        ${(props) => props.theme['purple-500']} 98.76%
      );
      border-radius: 6px 36px;
      padding: 1px;
      max-width: 526px;

      .data__list {
        background: ${(props) => props.theme['gray-100']};
        width: 100%;
        border-radius: 6px 36px;
        padding: 2.5rem;
        list-style: none;
      }

      .data__item {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        margin-bottom: 2rem;

        &-icone {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          color: ${(props) => props.theme.white};
          display: flex;
          align-items: center;
          justify-content: center;

          &--purple {
            background: ${(props) => props.theme['purple-500']};
          }

          &--yellow-500 {
            background: ${(props) => props.theme['yellow-500']};
          }

          &--yellow-700 {
            background: ${(props) => props.theme['yellow-700']};
          }
        }
      }
    }

    &__img {
      .order__svg {
        width: 100%;
        display: block;
      }
    }
    @media (max-width: 912px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
