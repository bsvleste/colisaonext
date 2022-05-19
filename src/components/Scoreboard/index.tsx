import Button from 'components/Button'
import * as S from './styles'
export interface ScoreboardProps {
  background: 'amareloMenu' | 'preto'
  color: 'amareloMenu' | 'preto'
  data?: string
  infoQuadro?: string
  haveButton?: boolean
}
const Scoreboard = ({
  infoQuadro,
  data,
  color = 'preto',
  background = 'amareloMenu',
  haveButton = false
}: ScoreboardProps) => {
  return (
    <>
      <S.ResultadoSegundoQuadro color={color} background={background}>
        <S.DataJogo>{data}</S.DataJogo>
        <S.InfoQuadro>{infoQuadro}</S.InfoQuadro>
        <S.WrapperResultado>
          <S.Logo>
            <p>Colisão</p>
          </S.Logo>
          <S.Resultado>3 X 2</S.Resultado>
          <S.Logo>
            <p>Adversário</p>
          </S.Logo>
        </S.WrapperResultado>
      </S.ResultadoSegundoQuadro>
      {!!haveButton && (
        <S.WrapperButton>
          <Button color="amareloMenu" backgroundColor="pretoFlat" size="large">
            Alterar Resultado
          </Button>
          <Button color="pretoFlat" backgroundColor="amareloMenu" size="large">
            Excluir Resultado
          </Button>
        </S.WrapperButton>
      )}
    </>
  )
}

export default Scoreboard
