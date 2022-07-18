import { useEffect } from 'react';
import Base from './template/Base';
import { api } from 'services/apiClient';
import Placar from './template/Placar';
import { withSSRAuth } from 'utils/withSSRAuth';
import { parseCookies } from 'nookies';

export default function Placares() {
  const { 'nextauth.colisaoToken': token } = parseCookies();
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    api
      .get('/auth/authInfo', config)
      .then((response) => console.log(response.data));
  });
  return (
    <Base>
      <Placar />
    </Base>
  );
}
export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    /* const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get('/auth/authInfo'); */
    return {
      props: {},
    };
  },
  {
    roles: ['administrator', 'editor'],
  }
);
