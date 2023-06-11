import { FocusEvent, useContext, useEffect, useState } from 'react'
import InputMask from 'react-input-mask'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  CartFormContainer,
  FormGrid,
  CartList,
  AddressForm,
  PaymentContainer,
  PaymentBox,
  OrderResume,
  OrderTotals,
  BtnOrderConfirm,
} from './styles'
import { CartContext } from '../../contexts/CartContext'
import { OrderItem } from '../../components/OrderItem'
import { priceFormater } from '../../util'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { fromZodError } from 'zod-validation-error'
import { Loader } from '../../components/Loader'
import { OrderContext } from '../../contexts/OrderContext'
import { useNavigate } from 'react-router-dom'

type PaymentMethodType = 'debit' | 'credit' | 'cash' | ''

const newOrderFormValidationSchema = zod.object({
  zipcode: zod
    .string()
    .regex(/^\d{2}\d{3}[-]\d{3}$/gm)
    .min(9),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(2).max(2),
  paymentMethod: zod.enum(['debit', 'credit', 'cash']),
})

export type CartFormData = zod.infer<typeof newOrderFormValidationSchema>

interface CepApiData {
  bairro: string
  cep: string
  complemento: string
  ddd: string
  gia: string
  ibge: string
  localidade: string
  logradouro: string
  siafi: string
  uf: string
  erro?: boolean
}

export function Cart() {
  const { products, clearProducts } = useContext(CartContext)
  const { createNewOrder } = useContext(OrderContext)
  const newOrderForm = useForm<CartFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = newOrderForm
  const [totalItens, setTotalItens] = useState<number>(0)
  const [totalOrder, setTotalOrder] = useState<number>(0)
  const [totalDelivery, setTotalDelivery] = useState<number>(0)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethodType>('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const isSubmitButtonDisablad = !(products.length > 0)

  useEffect(() => {
    let shouldCalculate = true

    function calculateTotalItens() {
      const total = products.reduce((accumulator, product) => {
        return accumulator + product.amount * product.price
      }, 0)
      setTotalItens(total)
    }

    function calculateTotalDelivery() {
      const newTotalDelivery = totalItens > 0 ? 3.5 : 0
      setTotalDelivery(newTotalDelivery)
    }

    function calculateTotalOrder() {
      const newTotalOrder = totalItens + totalDelivery
      setTotalOrder(newTotalOrder)
    }

    if (shouldCalculate) {
      calculateTotalItens()
      calculateTotalDelivery()
      calculateTotalOrder()
      shouldCalculate = false
    }
  }, [products, totalItens, totalDelivery])

  const onSubmit: SubmitHandler<CartFormData> = (data) => {
    const newOrder = {
      formData: data,
      products,
    }
    createNewOrder(newOrder)
    clearProducts()
    navigate('/success', { replace: true })
  }

  function handleSelectPaymentMethotd(method: PaymentMethodType) {
    switch (method) {
      case 'cash':
      case 'debit':
      case 'credit':
        if (newOrderFormValidationSchema.shape.paymentMethod.parse(method)) {
          delete errors.paymentMethod
          setPaymentMethod(method)
          setValue('paymentMethod', method)
        }
        break
      default:
        setPaymentMethod('')
    }
  }

  async function onBlur(e: FocusEvent<HTMLInputElement>) {
    try {
      const zipCode = e.target.value

      if (newOrderFormValidationSchema.shape.zipcode.parse(zipCode)) {
        setLoading(true)
        const response = await fetch(
          `https://viacep.com.br/ws/${zipCode}/json/`,
          {
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          },
        )
        const data: CepApiData = await response.json()

        if (data.erro) {
          console.log('Cep Invalido')
          return
        }
        setValue('street', data.logradouro)
        setValue('district', data.bairro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
        delete errors.street
        delete errors.district
        delete errors.city
        delete errors.state
        setLoading(false)
      }
    } catch (err: any) {
      const validationError = fromZodError(err)
      console.log(validationError)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CartFormContainer className="container" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h4 className="title-xs">Complete seu pedido</h4>
        <AddressForm>
          <span className={`loader ${loading ? 'isActive' : ''}`}>
            <Loader />
          </span>
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
            <InputMask
              mask="99999-999"
              {...register('zipcode')}
              id="zipcode"
              placeholder="CEP"
              onBlur={onBlur}
              className={errors.zipcode ? 'error' : ''}
            />

            <input
              {...register('street')}
              id="street"
              placeholder="Rua"
              className={errors.street ? 'error' : ''}
            />
            <input
              {...register('number')}
              id="number"
              placeholder="Número"
              className={errors.number ? 'error' : ''}
            />
            <div className="complementContainer">
              <input
                {...register('complement')}
                id="complement"
                placeholder="Complemento"
              />
              <span>Opcional</span>
            </div>
            <input
              {...register('district')}
              id="district"
              placeholder="Bairro"
              className={errors.district ? 'error' : ''}
            />
            <input
              {...register('city')}
              id="city"
              placeholder="Cidade"
              className={errors.city ? 'error' : ''}
            />
            <input
              {...register('state')}
              id="state"
              placeholder="UF"
              className={errors.state ? 'error' : ''}
            />
          </FormGrid>
        </AddressForm>

        <PaymentContainer>
          <header>
            <CurrencyDollar size={24} />
            <div>
              <h3 className="text-m">Pagamento</h3>
              <p className="text-s">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>
          <PaymentBox className={errors.paymentMethod ? 'error' : ''}>
            <input {...register('paymentMethod')} type="hidden" />
            <button
              type="button"
              className={paymentMethod === 'credit' ? 'active' : ''}
              onClick={() => handleSelectPaymentMethotd('credit')}
            >
              <CreditCard size={16} />
              Cartão de crédito
            </button>
            <button
              type="button"
              className={paymentMethod === 'debit' ? 'active' : ''}
              onClick={() => handleSelectPaymentMethotd('debit')}
            >
              <Bank size={16} />
              Cartão de débito
            </button>
            <button
              type="button"
              className={paymentMethod === 'cash' ? 'active' : ''}
              onClick={() => handleSelectPaymentMethotd('cash')}
            >
              <Money size={16} />
              Dinheiro
            </button>
          </PaymentBox>
        </PaymentContainer>
      </div>

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
            <span className="totalValue">
              {priceFormater.format(totalItens)}
            </span>
            <span className="delivery">Entrega</span>
            <span className="totalDelivery">
              {priceFormater.format(totalDelivery)}
            </span>
            <span className="totalOrder text-l bold">Total</span>
            <span className="totalOrderValue text-l bold">
              {priceFormater.format(totalOrder)}
            </span>
          </OrderTotals>
          <BtnOrderConfirm disabled={isSubmitButtonDisablad}>
            Confirmar Pedido
          </BtnOrderConfirm>
        </OrderResume>
      </CartList>
    </CartFormContainer>
  )
}
