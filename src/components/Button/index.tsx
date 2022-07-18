import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';
export type LineColors = 'amareloMenu' | 'preto';
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = {
  disabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  backgroundColor?: LineColors;
  color?: LineColors;
  icon?: JSX.Element;
  minimal?: boolean;
  as?: React.ElementType;
  border?: boolean;
} & ButtonTypes;
const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    disabled,
    color,
    backgroundColor,
    minimal = false,
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    border = false,
    ...props
  },
  ref
) => (
  <S.Wrapper
    ref={ref}
    {...props}
    color={color}
    backgroundColor={backgroundColor}
    minimal={minimal}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    border={border}
    disabled={disabled}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);

export default forwardRef(Button);
