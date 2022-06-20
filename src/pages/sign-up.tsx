import Auth from './template/Auth';
import { withSSRGuest } from '../utils/withSSRGuest';
import FormSignUp from 'components/FormSignUp';
export default function SignUp() {
  return (
    <Auth title="Sign Up">
      <FormSignUp />
    </Auth>
  );
}
export const getServerSideProps = withSSRGuest(async (ctx) => {
  return {
    props: {},
  };
});
