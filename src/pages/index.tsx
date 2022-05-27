import { AuthContext } from 'contexts/AuthContext';
import { useContext, useEffect } from 'react';
import { api } from 'services/api';
import Placar from './template/Placar';
export default function Index() {
  const { user } = useContext(AuthContext);
  /* useEffect(() => {
    api.get('/auth/authInfo').then((response) => console.log(response.data));
  }, []); */
  return (
    <>
      <Placar />
    </>
  );
}
