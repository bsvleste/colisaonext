import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  backgroundColor?: string
  color: string
  icon?: JSX.Element
  minimal?: boolean
  as?: React.ElementType
  border?: boolean
} & ButtonTypes
const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    color = 'pretoFlat',
    backgroundColor = 'amareloMenu',
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
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
