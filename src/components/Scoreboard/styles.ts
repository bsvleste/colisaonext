import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    max-width: 580px;
    height: 380px;
    display: grid;
    grid-template-columns: 1fr;
    background-color: ${theme.colors.amareloMenu};
  `}
`

export const ResultadoSegundoQuadro = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 195px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.preto};
    color: ${theme.colors.amareloMenu};
  `}
`
export const ResultadoPrimeiroQuadro = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 195px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.amareloMenu};
    color: ${theme.colors.preto};
  `}
`
export const WrapperResultado = styled.div`
  display: flex;
  margin-top: 15px;
  justify-content: space-around;
  width: 70%;
  align-items: center;
`
export const DataJogo = styled.h1`
  margin-top: -50px;
`
export const InfoQuadro = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: bold;
  `}
`

export const Logo = styled.div`
  background-image: url('https://source.unsplash.com/user/willianjusten/1042x580');
  width: 65px;
  height: 65px;
  background-size: cover;
  background-position: center center;
  border-radius: 50%;
  p {
    text-align: center;
    margin-top: 70px;
  }
`
export const Resultado = styled.h1``
export const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`
