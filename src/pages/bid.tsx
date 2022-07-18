import { useContext, useEffect } from 'react';
import { AuthContext } from 'contexts/AuthContext';
import { setupAPIClient } from 'services/api';
import { withSSRAuth } from 'utils/withSSRAuth';
import Base from './template/Base';
import { api } from 'services/apiClient';
import { UseCan } from 'hooks/useCan';
import { parseCookies } from 'nookies';

export default function Bid() {
  const { user } = useContext(AuthContext);
  const userCanSeeBid = UseCan({
    roles: ['administrator'],
  });
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
      <h1>BId esta no ar</h1>
      <h1>BId esta no ar</h1>
      <h1>BId esta no ar</h1>
      {userCanSeeBid && <h1>BId esta no{user?.nome}</h1>}
    </Base>
  );
}
export const getServerSideProps = withSSRAuth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);

    return {
      props: {},
    };
  },
  {
    roles: ['administrator'],
  }
);
