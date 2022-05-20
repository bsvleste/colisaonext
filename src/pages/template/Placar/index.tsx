import Button from 'components/Button'
import ModalScoreboard from 'components/ModalScoreboard'
import { Container } from 'components/Container'
import ControlMonth from 'components/ControlMonth'
import Scoreboard from 'components/Scoreboard'
import { useEffect, useState } from 'react'
import Modal from 'react-modal'
import * as S from './styles'
Modal.setAppElement('#__next')
const Placar = () => {
  const isAdm = true
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [scoreboard, setScoreboard] = useState([])

  function getScoreboard() {
    const data = localStorage.getItem('@colisao')
    setScoreboard(JSON.parse(data))
    console.log(scoreboard)
  }
  useEffect(() => {
    getScoreboard()
  }, [])
  function handleOpenModal() {
    setIsModalOpen(true)
  }
  function handleCloseModal() {
    setIsModalOpen(false)
  }
  return (
    <Container>
      <ModalScoreboard isOpen={isModalOpen} onRequestClose={handleCloseModal} />

      <S.Wrapper>
        <ControlMonth title="Janeiro" />
        {scoreboard.map((data) => (
          <>
            <Scoreboard
              color="preto"
              background="amareloMenu"
              data="15/05/2022"
              infoQuadro="Segundo Quadro"
            />
            <Scoreboard
              color="amareloMenu"
              background="preto"
              infoQuadro="Primeiro Quadro"
            />
            {isAdm && (
              <S.WrapperButton>
                <S.Button>
                  <Button
                    color="amareloMenu"
                    size="large"
                    backgroundColor="preto"
                  >
                    Alterar Resultado
                  </Button>
                </S.Button>
                <S.Button>
                  <Button
                    color="preto"
                    size="large"
                    backgroundColor="amareloMenu"
                  >
                    Alterar Resultado
                  </Button>
                </S.Button>
              </S.WrapperButton>
            )}
          </>
        ))}
      </S.Wrapper>
      <Button
        backgroundColor="amareloMenu"
        color="preto"
        fullWidth
        onClick={handleOpenModal}
      >
        Criar novo Placar
      </Button>
    </Container>
  )
}

export default Placar
