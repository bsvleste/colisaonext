import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Link from 'next/link';
import Button from 'components/Button';
import { Input as TextFields } from 'components/TextFields';
import { Email, Lock } from 'styled-icons/material-outlined';
import { FormWrapper, FormLink, ForgotPassword } from 'components/Form';
import { useForm } from 'react-hook-form';

const FormSignIn = () => {
  const { signIn, erroAuth } = useContext(AuthContext);
  const createUserFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
    password: yup
      .string()
      .required('Senha obrigatoria')
      .min(6, 'Senha Deve conter no minimo 6 caracteres'),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });

  async function handleSubmitSignIn(data) {
    await signIn(data);
  }
  return (
    <FormWrapper>
      {erroAuth && (
        <div style={{ color: '#ff0000' }}>
          Login ou Senha Invalidos tente novamente
        </div>
      )}
      <form onSubmit={handleSubmit(handleSubmitSignIn)}>
        <TextFields
          {...register('email')}
          error={errors.email}
          placeholder="E-mail"
          type="email"
          icon={<Email />}
        />
        <TextFields
          type="password"
          {...register('password')}
          placeholder="password"
          error={errors.password}
          icon={<Lock />}
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
        <FormLink>
          Acessar sem conta?{' '}
          <Link href="/">
            <a>Ver Placares</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};
export default FormSignIn;
