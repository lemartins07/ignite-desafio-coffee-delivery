import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1 className="title-xl">Title XL</h1>
      <h2 className="title-l">Title L</h2>
      <h3 className="title-m">Title M</h3>

      <p className="text-l">Text L</p>
      <p className="text-m">Text M</p>
      <p className="text-s">Text S</p>
      <p className="text-xs">Text XS</p>
      <input />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
