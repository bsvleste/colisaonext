import styled, { css, DefaultTheme } from 'styled-components'
import { ModalScoreboardProps, LineColors } from '.'
export const Wrapper = styled.section`
  ${({ theme }) => css`
    margin: 0 auto;
    margin-bottom: 62px;
    height: auto;
    max-width: ${theme.grid.container};
  `}
`
export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.amareloFlat};
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${theme.colors.preto};
  `}
`

export const WrapperTitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: bold;
  `}
`
export const WrapperButtonClose = styled.div``
export const Scoreboard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`

/* const wrapperModifier = {
  color: (theme: DefaultTheme, color: LineColors) => css`
    color: ${theme.colors[color]};
  `,
  background: (theme: DefaultTheme, backgroundColor: LineColors) => css`
    background-color: ${theme.colors[backgroundColor]};
  `
} */

export const WrapperScoreboardSecond = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;
    height: 120px;
    color: ${theme.colors.amareloMenu};
    background: ${theme.colors.preto};
  `}
`
export const WrapperScoreboardFirst = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    margin-top: 16px;
    height: 120px;
    color: ${theme.colors.preto};
    background: ${theme.colors.amareloMenu};
  `}
`
export const GameSecond = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.amareloMenu};
  `}
`
export const GameFirst = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.preto};
  `}
`
export const WrapperButton = styled.div`
  margin-top: 8px;
  width: 90%;
  display: flex;
  justify-content: space-around;
`
export const WrapperGroup = styled.div`
  display: flex;
  flex-direction: row;
  flex-direction: column;
`
export const WrapperInfoTimes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const NameClub = styled.p``
export const Goals = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
  `}
`
