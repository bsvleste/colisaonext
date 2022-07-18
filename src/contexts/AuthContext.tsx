import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
import { api } from 'services/apiClient';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
type UserProps = {
  id: string;
  email: string;
  nome: string;
  isAdm: boolean;
  permissions: string[];
  roles: string[];
};
type SignInCredentials = {
  email: string;
  password: string;
};
type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>;
  signOut: () => void;
  isAuthenticated: boolean;
  user: UserProps;
  erroAuth: boolean;
};
type AuthProviderProps = {
  children: ReactNode;
};
export const AuthContext = createContext({} as AuthContextData);

let authChannel: BroadcastChannel;

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const [erroAuth, setErroAuth] = useState(false);
  const isAuthenticated = !!user;
  const { 'nextauth.colisaoToken': token } = parseCookies();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    authChannel = new BroadcastChannel('auth');
    authChannel.onmessage = (message) => {
      switch (message.data) {
        case 'signOut':
          signOut();
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const { 'nextauth.colisaoToken': token } = parseCookies();
    if (token) {
      api
        .get('/auth/authInfo', config)
        .then((response) => {
          const { email, nome, id, isAdm, roles, permissions } = response.data;
          setUser({
            email,
            id,
            nome,
            isAdm,
            roles,
            permissions,
          });
        })
        .catch(() => {
          destroyCookie(undefined, 'nextauth.colisaoTokenIsAdm');
          destroyCookie(undefined, 'nextauth.colisaoToken');
          Router.push('/');
        });
    }
  }, []);

  async function signOut() {
    destroyCookie(undefined, 'nextauth.colisaoTokenIsAdm');
    destroyCookie(undefined, 'nextauth.colisaoToken');
    authChannel.postMessage('signOut');
    /*  setUser({}); */
    Router.push('/');
  }
  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('auth/login', {
        email,
        password,
      });
      console.log(response.data);
      const { isAdm, nome, id, token, tokenisAdm, roles, permissions } =
        response.data;
      console.log(`${tokenisAdm} esta coom`);
      if (tokenisAdm !== 'undefined') {
        setCookie(undefined, 'nextauth.colisaoTokenIsAdm', tokenisAdm, {
          maxAge: 60 * 60 * 24 * 30, //30 days
          path: '/',
        });
      }

      setCookie(undefined, 'nextauth.colisaoToken', token, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/',
      });
      /*  setCookie(undefined, 'nextauth.refreshToken', refreshToken, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/',
      }); */
      setUser({
        id,
        email,
        nome,
        isAdm,
        roles,
        permissions,
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      setErroAuth(false);
      Router.push('/placar');
    } catch (error) {
      console.log(`Erro ao signin ${error}`);
      setErroAuth(true);
    }
  }
  return (
    <AuthContext.Provider
      value={{ signOut, isAuthenticated, signIn, user, erroAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
