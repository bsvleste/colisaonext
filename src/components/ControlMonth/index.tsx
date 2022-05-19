import * as S from './styles'
import { LeftArrowAlt } from '@styled-icons/boxicons-regular/LeftArrowAlt'
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt'
export type ControlMonthProps = {
  title: string
}
const ControlMonth = ({ title }: ControlMonthProps) => {
  return (
    <S.Wrapper>
      <LeftArrowAlt size={25} />
      {title}
      <RightArrowAlt size={25} />
    </S.Wrapper>
  )
}

export default ControlMonth
