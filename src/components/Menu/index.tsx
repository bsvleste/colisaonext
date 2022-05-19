import { useState } from 'react'
import * as S from './styles'
import MediaMatch from 'components/Mediamatch'
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { Close as CloseIcon } from '@styled-icons/remix-line/Close'
import Button from 'components/Button'
export type MenuProps = {
  userName?: string
  isLogged?: boolean
}
const Menu = ({ isLogged }: MenuProps) => {
  const img = 'https://source.unsplash.com/user/willianjusten/1042x580'
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      {isLogged ? (
        <>
          <MediaMatch lessThan="medium">
            <S.IconWrapper onClick={() => setIsOpen(true)}>
              <MenuIcon arial-label="open Menu" />
            </S.IconWrapper>
          </MediaMatch>

          <MediaMatch greaterThan="medium">
            <S.MenuNav>
              <S.MenuLink href="#">Placar</S.MenuLink>
              <S.MenuLink href="#">Bid</S.MenuLink>
              <S.MenuLink href="#">Mensalidade</S.MenuLink>
            </S.MenuNav>
          </MediaMatch>

          <MediaMatch greaterThan="medium">
            <S.MenuGroup>
              <S.InfoJogador>
                <S.FotoPerfilJogador src={img} />
                <S.Title>Bruno</S.Title>
              </S.InfoJogador>
              <Button color="amareloMenu" backgroundColor="pretoFlat">
                Logof
              </Button>
            </S.MenuGroup>
          </MediaMatch>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            />

            <S.MenuNav>
              <S.MenuLink href="#">Placar</S.MenuLink>
              <S.MenuLink href="#">Bid</S.MenuLink>
              <S.MenuLink href="#">Mensalidade</S.MenuLink>
              <Button color="amareloMenu" backgroundColor="pretoFlat">
                Logof
              </Button>
            </S.MenuNav>
          </S.MenuFull>
        </>
      ) : (
        <div>
          <button>Singin</button>
        </div>
      )}
    </S.Wrapper>
  )
}
export default Menu
