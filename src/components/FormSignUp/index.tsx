import Link from 'next/link'
import Button from 'components/Button'
import TextFields from 'components/TextFields'
import { Email, AccountCircle, Lock } from 'styled-icons/material-outlined'
import { FormWrapper, FormLink } from 'components/Form'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextFields icon={<AccountCircle />} name="name" placeholder="name" />
      <TextFields icon={<Email />} name="email" placeholder="email" />
      <TextFields icon={<Lock />} name="password" placeholder="password" />
      <TextFields
        icon={<Lock />}
        name="confirmPassword"
        placeholder="Confirm password"
      />
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign In</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)
export default FormSignUp
