export const priceFormater = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

export function formatPaymentMethod(method: string) {
  switch (method) {
    case 'credit':
      return 'Cartão de Crédito'
    case 'debit':
      return 'Cartão de Débito'
    default:
      return 'Dinheiro'
  }
}
