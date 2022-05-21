import Button from 'components/Button'
import { ScoreboardMatchProps } from 'pages/template/Placar'
import * as S from './styles'

export interface ScoreboardProps {
  data?: string
  infoQuadro?: string
  idAdm?: boolean
  info: ScoreboardMatchProps
}
const Scoreboard = ({ idAdm = false, info }: ScoreboardProps) => {
  const { dataPartida, segundoQuadro, primeiroQuadro } = info
  return (
    <>
      <S.ResultadoSegundoQuadro>
        <S.DataJogo>
          {Intl.DateTimeFormat('pt-Br', {
            timeZone: 'UTC',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          }).format(new Date(dataPartida))}
        </S.DataJogo>
        <S.InfoQuadro>Segundo Quadro</S.InfoQuadro>
        <S.WrapperResultado>
          <S.Logo>
            <p>Colisão</p>
          </S.Logo>
          <S.Resultado>
            {segundoQuadro.segundoColisao} X {segundoQuadro.segundoAdversario}
          </S.Resultado>
          <S.Logo>
            <p>Adversário</p>
          </S.Logo>
        </S.WrapperResultado>
      </S.ResultadoSegundoQuadro>
      <S.ResultadoPrimeiroQuadro>
        <S.InfoQuadro>Primeiro Quadro</S.InfoQuadro>
        <S.WrapperResultado>
          <S.Logo>
            <p>Colisão</p>
          </S.Logo>
          <S.Resultado>
            {primeiroQuadro.primeiroColisao} X{' '}
            {primeiroQuadro.primeiroAdversario}
          </S.Resultado>
          <S.Logo>
            <p>Adversário</p>
          </S.Logo>
        </S.WrapperResultado>
      </S.ResultadoPrimeiroQuadro>
      {!!idAdm && (
        <S.WrapperButton>
          <Button color="amareloMenu" backgroundColor="preto" size="large">
            Alterar Resultado
          </Button>
          <Button color="preto" backgroundColor="amareloMenu" size="large">
            Excluir Resultado
          </Button>
        </S.WrapperButton>
      )}
    </>
  )
}

export default Scoreboard
