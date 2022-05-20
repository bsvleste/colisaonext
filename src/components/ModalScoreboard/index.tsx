import { MouseEvent, useState } from 'react'
import * as S from './styles'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { PlusCircle } from '@styled-icons/feather/PlusCircle'
import { MinusCircle } from '@styled-icons/feather/MinusCircle'
import Button from 'components/Button'
import Modal from 'react-modal'

export type LineColors = 'amareloMenu' | 'preto'
export type ModalScoreboardProps = {
  title?: string
  isOpen: boolean
  onRequestClose: () => void
}
const ModalScoreboard = ({
  title,
  isOpen,
  onRequestClose
}: ModalScoreboardProps) => {
  const [dataPartida, setDataPartida] = useState('')
  const [segundoColisao, setSegundoColisao] = useState(0)
  const [segundoAdversario, setSegundoAdversario] = useState(0)
  const [primeiroColisao, setPrimeiroColisao] = useState(0)
  const [primeiroAdversario, setPrimeiroAdversario] = useState(0)

  function handleChekIsLessThanZero(e: MouseEvent<SVGSVGElement, MouseEvent>) {
    switch (e.currentTarget.id) {
      case 'segundoColisao':
        if (segundoColisao <= 0) {
          return
        }
        setSegundoColisao((count) => count - 1)
        break
      case 'segundoAdv':
        if (segundoAdversario <= 0) {
          return
        }
        setSegundoAdversario((count) => count - 1)
        break
      case 'primeiroColisao':
        if (primeiroColisao <= 0) {
          return
        }
        setPrimeiroColisao((count) => count - 1)
        break
      case 'primeiroAdv':
        if (primeiroAdversario <= 0) {
          return
        }
        setPrimeiroAdversario((count) => count - 1)
        break

      default:
        break
    }
  }
  function handlePickDate(e) {
    setDataPartida(e.currentTarget.value)
  }
  function handleSaveScoreboard() {
    const lastScoreboard = localStorage.getItem('@colisao')
    const newScoreboard = lastScoreboard ? JSON.parse(lastScoreboard) : []
    const scoreboard = {
      segundoColisao,
      segundoAdversario,
      primeiroColisao,
      primeiroAdversario,
      dataPartida
    }
    const scoreboardFormatted = [scoreboard, ...newScoreboard]
    console.log(scoreboardFormatted)
    localStorage.setItem('@colisao', JSON.stringify(scoreboardFormatted))
  }
  return (
    <Modal
      isOpen={isOpen}
      // eslint-disable-next-line react/jsx-no-bind
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <S.Wrapper>
        <S.Header>
          <div></div>
          <S.WrapperTitle>{title}</S.WrapperTitle>
          <S.WrapperButtonClose>
            <CloseOutline size={30} onClick={onRequestClose} />
          </S.WrapperButtonClose>
        </S.Header>
        <S.Scoreboard>
          <input
            type="date"
            name="date"
            id="datajogo"
            placeholder="Escolha um data"
            onChange={(e) => handlePickDate(e)}
          />
          <label htmlFor="dataJogo">Escolha uma Data</label>
        </S.Scoreboard>
        <S.WrapperScoreboardSecond>
          <S.GameSecond color="amareloMenu">Segundo Quadro</S.GameSecond>
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
                    onClick={() => setSegundoColisao((count) => count + 1)}
                  />
                </Button>
                <S.Goals>{segundoColisao}</S.Goals>
                <Button
                  minimal
                  size="small"
                  color="amareloMenu"
                  backgroundColor="preto"
                >
                  <MinusCircle
                    size={32}
                    id="segundoColisao"
                    onClick={(e) => handleChekIsLessThanZero(e)}
                  />
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
                  <MinusCircle
                    size={32}
                    id="segundoAdv"
                    onClick={(e) => handleChekIsLessThanZero(e)}
                  />
                </Button>
              </S.GroupButton>
              <S.WrapperInfoTimes>
                <S.NameClub>Adversário</S.NameClub>
              </S.WrapperInfoTimes>
            </S.WrapperGroup>
          </S.WrapperButton>
        </S.WrapperScoreboardSecond>
        <S.WrapperScoreboardFirst>
          <S.GameFirst>Primeiro Quadro</S.GameFirst>
          <S.WrapperButton>
            <S.WrapperGroup>
              <S.GroupButton>
                <Button
                  size="small"
                  color="preto"
                  backgroundColor="amareloMenu"
                  minimal
                >
                  <PlusCircle
                    size={32}
                    onClick={() => setPrimeiroColisao((count) => count + 1)}
                  />
                </Button>
                <S.Goals>{primeiroColisao}</S.Goals>
                <Button
                  minimal
                  size="small"
                  color="preto"
                  backgroundColor="amareloMenu"
                >
                  <MinusCircle
                    size={32}
                    id="primeiroColisao"
                    onClick={(e) => handleChekIsLessThanZero(e)}
                  />
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
                  <PlusCircle
                    size={32}
                    onClick={() => setPrimeiroAdversario((count) => count + 1)}
                  />
                </Button>
                <S.Goals>{primeiroAdversario}</S.Goals>
                <Button
                  minimal
                  size="small"
                  color="preto"
                  backgroundColor="amareloMenu"
                >
                  <MinusCircle
                    size={32}
                    id="primeiroAdv"
                    onClick={(e) => handleChekIsLessThanZero(e)}
                  />
                </Button>
              </S.GroupButton>
              <S.WrapperInfoTimes>
                <S.NameClub>Adversário</S.NameClub>
              </S.WrapperInfoTimes>
            </S.WrapperGroup>
          </S.WrapperButton>
        </S.WrapperScoreboardFirst>
      </S.Wrapper>
      <Button
        backgroundColor="amareloMenu"
        color="preto"
        fullWidth
        onClick={handleSaveScoreboard}
      >
        Salvar
      </Button>
    </Modal>
  )
}

export default ModalScoreboard
