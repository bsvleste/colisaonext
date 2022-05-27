import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Link from 'next/link';
import Button from 'components/Button';
import TextFields from 'components/TextFields';
import { Email, Lock } from 'styled-icons/material-outlined';
import { FormWrapper, FormLink, ForgotPassword } from 'components/Form';

const FormSignIn = () => {
  const [values, setValues] = useState({ email: '', password: '' });

  const { signIn, isAuthenticated } = useContext(AuthContext);

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  async function handleSubmitSignIn(e: FormEvent) {
    e.preventDefault();
    const data = {
      email: values.email,
      password: values.password,
    };

    await signIn(data);
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmitSignIn}>
        <TextFields
          name="email"
          placeholder="E-mail"
          type="email"
          icon={<Email />}
          onInputChange={(v) => handleInput('email', v)}
        />
        <TextFields
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          onInputChange={(v) => handleInput('password', v)}
        />
        <ForgotPassword href="#">Forgot your Password?</ForgotPassword>
        <Button
          size="large"
          fullWidth
          backgroundColor="preto"
          color="amareloMenu"
        >
          Sign in now
        </Button>
        <FormLink>
          Dont have an account?{' '}
          <Link href="/sign-up">
            <a>Sign Up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};
export default FormSignIn;
