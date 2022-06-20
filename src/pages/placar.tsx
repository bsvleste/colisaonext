import { useEffect } from 'react';
import Base from './template/Base';
import { api } from 'services/apiClient';
import Placar from './template/Placar';
import { withSSRAuth } from 'utils/withSSRAuth';

export default function Placares() {
  useEffect(() => {
    api.get('/auth/authInfo').then((response) => console.log(response.data));
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
