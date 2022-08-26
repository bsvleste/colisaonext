import { darken } from 'polished';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.preto};
  `}
`;
export const WrapperInfo = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.preto};
    text-align: center;
    margin-bottom: 18px;
    a {
      color: ${theme.colors.branco};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.branco};
      transition: color, border, ${theme.transition.fast};
      &:hover {
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.branco)};
        color: ${darken(0.1, theme.colors.branco)};
      }
    }
  `}
`;
