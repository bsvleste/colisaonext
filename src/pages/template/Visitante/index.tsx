import Button from 'components/Button';
import Link from 'next/link';
import Router from 'next/router';
import * as S from './styles';

/* return(
  <h2>Bem vindo a Pagina do colisao</h2>
  </ ver os resultados clique{' '}
  <Link href="/visitante">
    <a>Aqui</a>
  </Link>
) */

const Visitante = () => {
  function handleRoute() {
    Router.push('/sign-in');
  }
  return (
    <S.Wrapper>
      <S.Title>Bem vindo ao Site do Colisão</S.Title>
      <S.WrapperInfo>
        Para ver os resultados clique{' '}
        <Link href="/visitante">
          <a>Aqui</a>
        </Link>
        ou faça seu Login
      </S.WrapperInfo>
      <Link passHref href="/sign-in">
        <Button fullWidth color="amareloMenu" backgroundColor="preto">
          Sign in
        </Button>
      </Link>
    </S.Wrapper>
  );
};
export default Visitante;
