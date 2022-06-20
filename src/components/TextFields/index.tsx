import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from 'react';
import { FieldError } from 'react-hook-form';
import * as S from './styles';

export type TextFieldProps = {
  label?: string;
  initialValue?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  error?: FieldError;
} & InputHTMLAttributes<HTMLInputElement>;

const TextField: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {
    icon,
    iconPosition = 'left',
    label,
    name,
    error,
    disabled = false,
    ...props
  },
  ref
) => {
  return (
    <S.Wrapper disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          ref={ref}
          type="text"
          iconPosition={iconPosition}
          disabled={disabled}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error.message}</S.Error>}
    </S.Wrapper>
  );
};
export const Input = forwardRef(TextField);
