import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import { OrderContextProvider } from './contexts/OrderContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <OrderContextProvider>
            <Router />
            <GlobalStyle />
          </OrderContextProvider>
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
