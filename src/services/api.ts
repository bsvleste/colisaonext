import axios, { AxiosError } from 'axios';
import { Router } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestQueue = [];
export const api = axios.create({
  baseURL: 'http://localhost:3333/api/colisao/v2/',
  headers: {
    Authorization: `Bearer ${cookies['nextauth.colisaoToken']} `,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response.status === 401) {
      if (error.response.data?.code === 'token.expired') {
        cookies = parseCookies();
        const { 'nextauth.refreshToken': refreshToken } = cookies;
        const originalConfig = error.config;
        if (!isRefreshing) {
          isRefreshing = true;
          api
            .post('/auth/refresh', { refreshToken })
            .then((response) => {
              const { token, tokenisAdm } = response.data;
              setCookie(undefined, 'nextauth.colisaoTokenIsAdm', tokenisAdm, {
                maxAge: 60 * 60 * 24 * 30, //30 days
                path: '/',
              });

              setCookie(undefined, 'nextauth.colisaoToken', token, {
                maxAge: 60 * 60 * 24 * 30, //30 days
                path: '/',
              });
              api.defaults.headers['Authorization'] = `Bearer ${token}`;
              failedRequestQueue.forEach((request) => request.resolve(token));
              failedRequestQueue = [];
            })
            .catch((err) => {
              failedRequestQueue.forEach((request) => request.reject(err));
              failedRequestQueue = [];
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
        destroyCookie(undefined, 'nextauth.colisaoTokenIsAdm');
        destroyCookie(undefined, 'nextauth.colisaoToken');
        Router.push('/sign-in');
      }
    }
    return Promise.reject(error);
  }
);
