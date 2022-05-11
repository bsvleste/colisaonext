import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* poppins-300 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: local(''),
         url('/fonts/poppins-v19-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
}
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v19-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
}
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v19-latin-500.woff2') format('woff2'), /* Super Modern Browsers */
}
/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v19-latin-600.woff2') format('woff2'), /* Super Modern Browsers */
}
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local(''),
       url('/fonts/poppins-v19-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
}
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing:antialised;
    -moz-osx-font-smoothing:grayscale;
    &::before,
    &::after{
      box-sizing:inherit
    }
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      background-color: ${theme.colors.pretoFlat};
    }
  `}
`
export default GlobalStyles
