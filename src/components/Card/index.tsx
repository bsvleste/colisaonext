import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
export type CardProps = {
  title?: string
}
const Card = ({ title }: CardProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <div></div>
        <S.WrapperTitle>{title}</S.WrapperTitle>
        <S.WrapperButtonClose>
          <CloseOutline size={30} />
        </S.WrapperButtonClose>
      </S.Header>
      <S.Scoreboard>
        <input type="date" name="date" placeholder="Escolha um data" />
      </S.Scoreboard>
    </S.Wrapper>
  )
}

export default Card
