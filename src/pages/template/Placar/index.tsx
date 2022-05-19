import Button from 'components/Button'
import { Container } from 'components/Container'
import ControlMonth from 'components/ControlMonth'
import Scoreboard from 'components/Scoreboard'
import * as S from './styles'

const Placar = () => {
  const isAdm = true
  return (
    <Container>
      <ControlMonth title="Janeiro" />
      <S.Wrapper>
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
                backgroundColor="pretoFlat"
              >
                Alterar Resultado
              </Button>
            </S.Button>
            <S.Button>
              <Button
                color="pretoFlat"
                size="large"
                backgroundColor="amareloMenu"
              >
                Alterar Resultado
              </Button>
            </S.Button>
          </S.WrapperButton>
        )}
      </S.Wrapper>
      <Button backgroundColor="amareloMenu" color="preto" fullWidth>
        Criar novo Placar
      </Button>
    </Container>
  )
}

export default Placar
