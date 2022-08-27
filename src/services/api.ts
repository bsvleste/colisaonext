import axios, { AxiosError } from 'axios';
import { signOut } from 'contexts/AuthContext';
import { parseCookies, setCookie } from 'nookies';
import { AuthTokenErrors } from './errors/AuthTokenErrors';
let isRefreshing = false;
let failedRequestQueue:any = [];

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);
  const config = {
    headers: {
      Authorization: `Bearer ${cookies['nextauth.colisaoToken']} `,
    },
  };
  const api = axios.create({
    baseURL: 'https://backendcolisao.herokuapp.com/api/colisao/v2/',
  });

  api.interceptors.response.use(
    (response:any) => {
      return response;
    },
    (error: AxiosError) => {
      if (error.response.status === 401) {
        if (error.response.data?.code === 'token.expired') {
          cookies = parseCookies();
          const { 'nextauth.refreshToken': refreshToken } = cookies;
          const originalConfig = error.config;
          console.log('refers');
          if (!isRefreshing) {
            isRefreshing = true;
            api
              .post('/auth/refresh', { refreshToken }, config)
              .then((response:any) => {
                const { token, tokenisAdm } = response.data;
                setCookie(ctx, 'nextauth.colisaoTokenIsAdm', tokenisAdm, {
                  maxAge: 60 * 60 * 24 * 30, //30 days
                  path: '/',
                });

                setCookie(ctx, 'nextauth.colisaoToken', token, {
                  maxAge: 60 * 60 * 24 * 30, //30 days
                  path: '/',
                });
                api.defaults.headers['Authorization'] = `Bearer ${token}`;
                failedRequestQueue.forEach((request:any) => request.resolve(token));
                failedRequestQueue = [];
              })
              .catch((err: any) => {
                failedRequestQueue.forEach((request: { reject: (arg0: any) => any; }) => request.reject(err));
                failedRequestQueue = [];
                if (process.browser) {
                  signOut();
                }
              })
              .finally(() => {
                isRefreshing = false;
              });
          }
          return new Promise((resolve, reject) => {
            failedRequestQueue.push({
              resolve: (token: string) => {
                originalConfig.headers['Authorization'] = `Bearer${token}`;
                resolve(api(originalConfig));
              },
              reject: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        } else {
          if (process.browser) {
            signOut();
          } else {
            return Promise.reject(new AuthTokenErrors());
          }
        }
      }
      return Promise.reject(error);
    }
  );
  return api;
}
