import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { PlusCircle } from '@styled-icons/feather/PlusCircle'
import { MinusCircle } from '@styled-icons/feather/MinusCircle'
import Button from 'components/Button'
import { useState } from 'react'
export type LineColors = 'amareloMenu' | 'preto'
export type CardProps = {
  title?: string
  color?: LineColors
  backgroundColor?: LineColors
}
const Card = ({ title }: CardProps) => {
  const [segundoColisao, setSegundoColisao] = useState(0)
  const [segundoAdversario, setSegundoAdversario] = useState(0)

  function handleDecressete() {
    if (segundoAdversario <= 0) {
      return
    }
    setSegundoAdversario((count) => count - 1)
  }
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
        <input
          type="date"
          name="date"
          id="datajogo"
          placeholder="Escolha um data"
        />
        <label htmlFor="dataJogo">Escolha uma Data</label>
      </S.Scoreboard>
      <S.WrapperScoreboard color="amareloMenu" backgroundColor="preto">
        <S.Game color="amareloMenu">Segundo Quadro</S.Game>
        <S.WrapperButton>
          <S.WrapperGroup>
            <S.GroupButton>
              <Button
                size="small"
                color="amareloMenu"
                backgroundColor="preto"
                minimal
              >
                <PlusCircle
                  size={32}
                  onClick={() => setSegundoAdversario((count) => count + 1)}
                />
              </Button>
              <S.Goals>{segundoAdversario}</S.Goals>
              <Button
                minimal
                size="small"
                color="amareloMenu"
                backgroundColor="preto"
              >
                <MinusCircle size={32} onClick={handleDecressete} />
              </Button>
            </S.GroupButton>
            <S.WrapperInfoTimes>
              <S.NameClub>Colisão</S.NameClub>
            </S.WrapperInfoTimes>
          </S.WrapperGroup>
          <S.WrapperGroup>
            <S.GroupButton>
              <Button
                size="small"
                color="amareloMenu"
                backgroundColor="preto"
                minimal
              >
                <PlusCircle size={32} />
              </Button>
              <S.Goals>5</S.Goals>
              <Button
                minimal
                size="small"
                color="amareloMenu"
                backgroundColor="preto"
              >
                <MinusCircle size={32} />
              </Button>
            </S.GroupButton>
            <S.WrapperInfoTimes>
              <S.NameClub>Adversário</S.NameClub>
            </S.WrapperInfoTimes>
          </S.WrapperGroup>
        </S.WrapperButton>
      </S.WrapperScoreboard>
      <S.WrapperScoreboard color="preto" backgroundColor="amareloMenu">
        <S.Game color="preto">Primeiro Quadro</S.Game>
        <S.WrapperButton>
          <S.WrapperGroup>
            <S.GroupButton>
              <Button
                size="small"
                color="preto"
                backgroundColor="amareloMenu"
                minimal
              >
                <PlusCircle size={32} />
              </Button>
              <S.Goals>{}</S.Goals>
              <Button
                minimal
                size="small"
                color="preto"
                backgroundColor="amareloMenu"
              >
                <MinusCircle size={32} />
              </Button>
            </S.GroupButton>
            <S.WrapperInfoTimes>
              <S.NameClub>Colisão</S.NameClub>
            </S.WrapperInfoTimes>
          </S.WrapperGroup>
          <S.WrapperGroup>
            <S.GroupButton>
              <Button
                size="small"
                color="preto"
                backgroundColor="amareloMenu"
                minimal
              >
                <PlusCircle size={32} />
              </Button>
              <S.Goals>5</S.Goals>
              <Button
                minimal
                size="small"
                color="preto"
                backgroundColor="amareloMenu"
              >
                <MinusCircle size={32} />
              </Button>
            </S.GroupButton>
            <S.WrapperInfoTimes>
              <S.NameClub>Adversário</S.NameClub>
            </S.WrapperInfoTimes>
          </S.WrapperGroup>
        </S.WrapperButton>
      </S.WrapperScoreboard>
    </S.Wrapper>
  )
}

export default Card
