import styled, { css } from 'styled-components'
export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: 62px;
    box-shadow: 5px 5px 0 ${theme.colors.pretoFlat};
    height: 350px;
    max-width: ${theme.grid.container};
  `}
`
export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.amareloMenu};
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.preto};
  `}
`

export const WrapperTitle = styled.div`
  width: px;
`
export const WrapperButtonClose = styled.div``
export const Scoreboard = styled.div``
