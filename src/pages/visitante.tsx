import { withSSRGuest } from 'utils/withSSRGuest';
import Placar from './template/Placar';

export default function Visitante() {
  return <Placar />;
}
export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
