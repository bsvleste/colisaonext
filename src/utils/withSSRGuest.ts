import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsResult,
} from 'next';
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenErrors } from 'services/errors/AuthTokenErrors';
export function withSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetStaticPropsResult<P>> => {
    const cookies = parseCookies(ctx);
    if (cookies['nextauth.colisaoToken']) {
      return {
        redirect: {
          destination: '/placar',
          permanent: false,
        },
      };
    }
    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenErrors) {
        destroyCookie(undefined, 'nextauth.colisaoTokenIsAdm');
        destroyCookie(undefined, 'nextauth.colisaoToken');
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }
  };
}
