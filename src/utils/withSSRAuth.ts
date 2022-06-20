import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsResult,
} from 'next';
import decode from 'jwt-decode';
import { destroyCookie, parseCookies } from 'nookies';
import { AuthTokenErrors } from 'services/errors/AuthTokenErrors';
import { validateUserPermissions } from './validateUserPermissions';

type WithSSRAuthOptions = {
  permissions?: string[];
  roles?: string[];
};

export function withSSRAuth<P>(
  fn: GetServerSideProps<P>,
  options?: WithSSRAuthOptions
) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetStaticPropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies['nextauth.colisaoToken'];
    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
    if (options) {
      const user = decode<{ permissions: string[]; roles: string[] }>(token);
      const { permissions, roles } = options;
      const userHasValidPermissions = validateUserPermissions({
        user,
        permissions,
        roles,
      });
      if (!userHasValidPermissions) {
        return {
          redirect: {
            destination: '/placar',
            permanent: false,
          },
        };
      }
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenErrors) {
        destroyCookie(undefined, 'nextauth.colisaoTokenIsAdm');
        destroyCookie(undefined, 'nextauth.colisaoToken');
        return {
          redirect: {
            destination: '/sign-in',
            permanent: false,
          },
        };
      }
    }
  };
}
