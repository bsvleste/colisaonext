import Button from 'components/Button';
import Can from 'components/Can';
import { ScoreboardMatchProps } from 'pages/template/Placar';
import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles';

export interface ScoreboardProps {
  data?: string;
  infoQuadro?: string;
  idAdm?: boolean;
  info: ScoreboardMatchProps;
  onRequestOpenModal: (e: FormEvent) => void;
  title?: string;
}
const Scoreboard = ({ info, onRequestOpenModal }: ScoreboardProps) => {
  const { dataPartida, segundoQuadro, primeiroQuadro, _id: id } = info;
  return (
    <>
      <S.ResultadoSegundoQuadro>
        <S.DataJogo>
          {Intl.DateTimeFormat('pt-Br', {
            timeZone: 'UTC',
            day: '2-digit',
            month: '2-digit',
            year: '2-digit',
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

      <Can roles={['administrator']}>
        <S.WrapperButton>
          <Button
            color="amareloMenu"
            backgroundColor="preto"
            size="large"
            name="Alterar"
            onClick={onRequestOpenModal}
            id={id}
          >
            Alterar Resultado
          </Button>
          <Button
            color="preto"
            backgroundColor="amareloMenu"
            size="large"
            name="Excluir"
            onClick={onRequestOpenModal}
            id={id}
          >
            Excluir Resultado
          </Button>
        </S.WrapperButton>
      </Can>
    </>
  );
};

export default Scoreboard;
