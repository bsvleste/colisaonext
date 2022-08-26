import Button from 'components/Button';
import { Container } from 'components/Container';
import { withSSRGuest } from 'utils/withSSRGuest';
import Placar from './template/Placar';
import Link from 'next/link';
export default function Visitante() {
  return (
    <>
      <Container>
        <Button
          size="large"
          fullWidth
          backgroundColor="amareloMenu"
          color="preto"
        >
          <Link href="/" passHref>
            SignIn
          </Link>
        </Button>
      </Container>
      <Placar />
    </>
  );
}
export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
