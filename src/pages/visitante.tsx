import { withSSRGuest } from 'utils/withSSRGuest';
import Base from './template/Base';
import Placar from './template/Placar';

export default function Visitante() {
  return <Placar />;
}
export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
