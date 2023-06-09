import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  input:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-700']}
  }

  body {
    background-color: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']};
    --webkit-font-smoothing: antialiased;
  }

  body, input-security, textarea, button {
    font-family: ${(props) => props.theme['font-normal']};
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  @media (max-width:  912px) {
   html {
      font-size: 87.5%;      
    }
  }

  button {
    cursor: pointer;
  }

  button:not(:disabled):active { 
    transform: translateY(1px);
  }

  .container {
    max-width: 70rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .title-xl, .title-l, .title-m {
    font-family: ${(props) => props.theme['font-display']};    
    font-weight: 800;    
    line-height: 130%;    
    color: ${(props) => props.theme['gray-900']};
  }

  .title-xl {
    font-size: ${(props) => props.theme['font-title-xl']};
  }
  
  .title-l {
    font-size: ${(props) => props.theme['font-title-l']};
  }
  
  .title-m {
    font-size: ${(props) => props.theme['font-title-m']};
  }

  .text-l, .text-m, .text-s, .text-xs{
    font-family: ${(props) => props.theme['font-normal']};    
    font-weight: 400;    
    line-height: 130%;    
    color: ${(props) => props.theme['gray-700']};
  }

  .text-l {
    font-size: ${(props) => props.theme['font-text-l']};
  }
  
  .text-m {
    font-size: ${(props) => props.theme['font-text-m']};
  } 
  
  .text-s {
    font-size: ${(props) => props.theme['font-text-s']};
  } 
  
  .text-xs {
    font-size: ${(props) => props.theme['font-text-xs']};
    font-weight: 700;
  }

  .bold {
    font-weight: 700;
  }
`
