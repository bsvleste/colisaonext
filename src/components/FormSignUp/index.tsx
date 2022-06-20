import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { AuthContext } from '../../contexts/AuthContext';
import { FormEvent, useContext, useState } from 'react';

import Link from 'next/link';
import Button from 'components/Button';
import { Input as TextFields } from 'components/TextFields';
import { useForm } from 'react-hook-form';
import { Email, AccountCircle, Lock } from 'styled-icons/material-outlined';
import { FormWrapper, FormLink } from 'components/Form';
import { api } from 'services/apiClient';
import Router from 'next/router';

type UserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const FormSignUp = () => {
  const [errorStatus, setErrorStatus] = useState(false);
  const [messageError, setMessageError] = useState('');
  const createUserFormSchema = yup.object().shape({
    nome: yup.string().required('Nome é obrigatorio'),
    email: yup.string().required('E-mail obrigatorio').email('E-mail invalido'),
    senha: yup
      .string()
      .required('Senha obrigatoria')
      .min(6, 'Senha Deve conter no minimo 6 caracteres'),
    passwordConfirm: yup
      .string()
      .oneOf([null, yup.ref('password')], 'As senha precisam ser iguais'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  async function onSubmit(data) {
    const response = await api
      .post('auth/create', {
        nome: data.nome,
        email: data.email,
        senha: data.senha,
      })
      .then((res) => {
        if (res.data.success === false) {
          setErrorStatus(true);
          setMessageError(res.data.message);
        } else {
          setErrorStatus(false);
          Router.push('/sign-in');
        }
      })
      .catch((error) => {
        setErrorStatus(true);
      });
  }

  return (
    <FormWrapper>
      {errorStatus && (
        <div>
          <p>{messageError}</p>
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFields
          icon={<AccountCircle />}
          {...register('nome')}
          placeholder="nome"
          type="text"
          error={errors.nome}
        />
        <TextFields
          icon={<Email />}
          placeholder="email"
          type="email"
          {...register('email')}
          error={errors.email}
        />
        <TextFields
          icon={<Lock />}
          type="password"
          {...register('senha')}
          placeholder="password"
          error={errors.senha}
        />
        {/* <TextFields
          icon={<Lock />}
          type="password"
          {...register('passwordConfirm')}
          placeholder="Confirm password"
          error={errors.passwordConfirm}
        /> */}
        <Button
          size="large"
          fullWidth
          color="amareloMenu"
          backgroundColor="preto"
          type="submit"
        >
          Cadastrar
        </Button>
        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  );
};
export default FormSignUp;
