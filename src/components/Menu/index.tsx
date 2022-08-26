import { Close as CloseIcon } from '@styled-icons/remix-line/Close';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2';
import Button from 'components/Button';
import MediaMatch from 'components/Mediamatch';
import { AuthContext } from 'contexts/AuthContext';
import { UseCan } from 'hooks/useCan';
import Link from 'next/link';
import { useContext, useState } from 'react';
import * as S from './styles';
export type MenuProps = {
  userName?: string;
  isLogged?: boolean;
};

const Menu = ({ isLogged }: MenuProps) => {
  const img = 'https://source.unsplash.com/user/willianjusten/1042x580';
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useContext(AuthContext);
  const userCanSeeRoles = UseCan({
    roles: ['administrator'],
  });
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon arial-label="open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/placar" passHref>
            <S.MenuLink>Placar</S.MenuLink>
          </Link>
          {/* <Link href="/bid" passHref>
            <S.MenuLink>Bid</S.MenuLink>
          </Link>
          {userCanSeeRoles && (
            <Link href="#" passHref>
              <S.MenuLink>Mensalidade</S.MenuLink>
            </Link>
          )} */}
        </S.MenuNav>
      </MediaMatch>

      <MediaMatch greaterThan="medium">
        <S.MenuGroup>
          <S.InfoJogador>
            <S.FotoPerfilJogador src={img} />
            <S.Title>{user?.nome}</S.Title>
          </S.InfoJogador>
          <Button
            color="amareloMenu"
            backgroundColor="preto"
            onClick={() => signOut()}
          >
            Logoff
          </Button>
        </S.MenuGroup>
      </MediaMatch>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <Link passHref href="/placar">
            <S.MenuLink href="/placar">Placar</S.MenuLink>
          </Link>
          {/*  <Link passHref href="/bid">
            <S.MenuLink>Bid</S.MenuLink>
          </Link>
          <Link passHref href="/placar">
            <S.MenuLink>Mensalidade</S.MenuLink>
          </Link> */}
          <Button
            color="amareloMenu"
            backgroundColor="preto"
            onClick={() => signOut()}
          >
            Logoff
          </Button>
        </S.MenuNav>
      </S.MenuFull>
    </S.Wrapper>
  );
};
export default Menu;
