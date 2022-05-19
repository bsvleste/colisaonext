import styled, { css } from 'styled-components'
import media from 'styled-media-query'
type MenuProps = { isOpen: boolean }
export const Wrapper = styled.menu`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: ${theme.colors.amareloMenu};
    width: 100%;
    height: 56px;
  `}
`
export const IconWrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.preto};
    width: 2.4rem;
    height: 2.4rem;
  `}
`
export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: ${theme.spacings.small};
    > div {
      margin-right: ${theme.spacings.medium};
    }
  `}
`
type ImgProps = {
  src: string
}
export const FotoPerfilJogador = styled.div<ImgProps>`
  ${({ src }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    margin-right: 5px;
  `}
`

export const InfoJogador = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.preto};
  `}
`
export const Title = styled.p``
export const MenuNav = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      margin-left: ${theme.spacings.small};
    `}
  `}
`

export const MenuLink = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.preto};
    position: relative;
    font-size: ${theme.font.sizes.medium};
    margin: 0.3rem ${theme.spacings.small} 0;
    text-decoration: none;
    text-align: center;
    &:hover {
      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 0.3rem;
        background-color: ${theme.colors.preto};
        animation: hoverAnimation 0.2s forwards;
      }
      @keyframes hoverAnimation {
        from {
          width: 0;
          left: 50%;
        }
        to {
          width: 100%;
          left: 0;
        }
      }
    }
  `}
`
export const MenuFull = styled.nav<MenuProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${theme.colors.amareloMenu};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none '};
    color: ${theme.colors.preto};
    > svg {
      position: absolute;
      top: 0;
      right: 0;
      margin: ${theme.spacings.xsmall};
      cursor: pointer;
      width: 2.4rem;
      height: 2.4rem;
    }
    ${MenuLink} {
      color: ${theme.colors.preto};
      font-weight: ${theme.font.bold};
      font-size: ${theme.font.sizes.xlarge};
      margin-bottom: ${theme.spacings.small};
      transform: ${isOpen ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
    ${MenuNav} {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      flex-direction: column;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `}
`
