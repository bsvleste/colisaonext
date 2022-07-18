import styled, { css, DefaultTheme } from 'styled-components';
import { AlertProps, LineColors } from '.';
export type WrapperProps = Pick<AlertProps, 'backgroundColor'>;
const wrapperModifiers = {
  background: (theme: DefaultTheme, backgroundColor: LineColors) => css`
    background-color: ${theme.colors[backgroundColor]};
  `,
};
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, backgroundColor }) => css`
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${!!backgroundColor && wrapperModifiers.background(theme, backgroundColor)};
  `}
`;
export const Children = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.preto};
  `}
`;
