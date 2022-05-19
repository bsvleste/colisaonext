import theme from 'styled/theme'
//inferencia de tipos
type Theme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {
    grid: {
      container: '100rem'
      gutter: '3.2rem'
    }
    border: {
      radius: '0.4rem'
    }
    font: {
      family: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
      light: 300
      normal: 400
      bold: 600
      sizes: {
        xsmall: '1.2rem'
        small: '1.4rem'
        medium: '1.6rem'
        large: '1.8rem'
        xlarge: '2.0rem'
        xxlarge: '2.8rem'
        huge: '5.2rem'
      }
    }
    colors: {
      preto: '#303030'
      vermelho: '#FF0000'
      verde: '#11FF00'
      branco: '#FFFFFF'
      pretoFlat: '#2B2B2B'
      cinza: '#A2A2A2'
      amareloFlat: '#FEFE34'
      amareloClaro: '#FEFE98'
      amareloHover: '#BFBF00'
      pretoMenu: '#15171b'
      amareloMenu: '#ffed00'
    }
    spacings: {
      xxsmall: '0.8rem'
      xsmall: '1.6rem'
      small: '2.4rem'
      medium: '3.2rem'
      large: '4.0rem'
      xlarge: '4.8rem'
      xxlarge: '5.6rem'
    }
    layers: {
      base: 10
      menu: 20
      overlay: 30
      modal: 40
      alwaysOnTop: 50
    }
    transition: {
      default: '0.3s ease-in-out'
      fast: '0.1s ease-in-out'
    }
  }
}
