import FormSignIn from 'components/FormSignIn';
import Auth from './template/Auth';
import { withSSRGuest } from '../utils/withSSRGuest';
export default function SignIn() {
  return (
    <Auth title="Sign In">
      <FormSignIn />
    </Auth>
  );
}
export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
