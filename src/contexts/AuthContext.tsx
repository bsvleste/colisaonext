import { createContext, ReactNode, useEffect, useState } from 'react';
import Router from 'next/router';
import { api } from 'services/api';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
type UserProps = {
  id: string;
  email: string;
  nome: string;
  isAdm: boolean;
};
type SignInCredentials = {
  email: string;
  password: string;
};
type AuthContextData = {
  signIn(credentials: SignInCredentials): Promise<void>;
  isAuthenticated: boolean;
  user: UserProps;
};
type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'nextauth.colisaoToken': token } = parseCookies();
    if (token) {
      api
        .get('/auth/authInfo')
        .then((response) => {
          const { email, nome, id, isAdm } = response.data;
          setUser({
            email,
            id,
            nome,
            isAdm,
          });
        })
        .catch((error) => {
          destroyCookie(undefined, 'nextauth.colisaoTokenIsAdm');
          destroyCookie(undefined, 'nextauth.colisaoToken');
          Router.push('/sign-in');
        });
    }
  }, []);
  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('auth/login', {
        email,
        password,
      });
      console.log(response.data);
      const { isAdm, nome, id, token, tokenisAdm } = response.data;
      setCookie(undefined, 'nextauth.colisaoTokenIsAdm', tokenisAdm, {
        maxAge: 60 * 60 * 24 * 30, //30 days
        path: '/',
      });

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
      });

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
      console.log(user);
      Router.push('/');
    } catch (error) {
      console.log(`Erro ao signin ${error}`);
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
