import styled, { css, DefaultTheme } from 'styled-components';
import { ButtonProps, LineColors } from '.';

export type WrapperProps = { hasIcon: boolean } & Pick<
  ButtonProps,
  | 'size'
  | 'fullWidth'
  | 'minimal'
  | 'border'
  | 'color'
  | 'backgroundColor'
  | 'disabled'
>;

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: LineColors) => css`
    color: ${theme.colors[color]};
  `,
  background: (theme: DefaultTheme, backgroundColor: LineColors) => css`
    background-color: ${theme.colors[backgroundColor]};
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.amareloMenu};
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;
      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  buttonBorder: () => css`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    text-align: center;
  `,
  buttonDisabled: () => css`
    opacity: 0.3;
    cursor: not-allowed;
  `,
};
export const Wrapper = styled.button<WrapperProps>`
  ${({
    theme,
    size,
    fullWidth,
    hasIcon,
    minimal,
    border,
    color,
    backgroundColor,
  }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    :disabled {
      ${!!fullWidth && wrapperModifiers.buttonDisabled()};
    }
    /* &:hover {
      background: ${minimal
      ? 'none'
      : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
    } */
    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!border && wrapperModifiers.buttonBorder()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${minimal && wrapperModifiers.minimal(theme)};
    ${!!color && wrapperModifiers.color(theme, color)}
    ${!!backgroundColor && wrapperModifiers.background(theme, backgroundColor)}
  `}
`;
