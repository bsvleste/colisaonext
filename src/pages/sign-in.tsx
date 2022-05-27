import FormSignIn from 'components/FormSignIn';
import { GetServerSideProps } from 'next';
import Auth from './template/Auth';
import { parseCookies } from 'nookies';
export default function SignIn() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  if (cookies['nextauth.colisaoToken']) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
