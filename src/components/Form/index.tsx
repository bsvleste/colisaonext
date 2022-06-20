import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import * as TextFieldStyles from 'components/TextFields/styles';
import * as ButtonStyles from 'components/Button/styles';

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;
export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.preto};
    text-decoration: none;
    text-align: right;
    &:hover {
      color: ${lighten(0.2, theme.colors.preto)};
    }
  `}
`;
export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.preto};
    text-align: center;
    a {
      color: ${theme.colors.cinza};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.cinza};
      transition: color, border, ${theme.transition.fast};
      &:hover {
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.cinza)};
        color: ${darken(0.1, theme.colors.cinza)};
      }
    }
  `}
`;
