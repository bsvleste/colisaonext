import * as S from './styles'
export type LineColors = 'amareloMenu' | 'preto'
export type HeadingProps = {
  children: React.ReactNode
  color?: 'amareloMenu' | 'preto'
  lineLeft?: boolean
  lineBottom?: boolean
  size?: 'small' | 'medium' | 'huge'
  lineColor?: LineColors
}
const Heading = ({
  children,
  color = 'preto',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'preto'
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineBottom={lineBottom}
    lineLeft={lineLeft}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)
export default Heading
