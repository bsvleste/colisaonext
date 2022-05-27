import Button from 'components/Button';
import ModalScoreboard from 'components/ModalScoreboard';
import { Container } from 'components/Container';
import { LeftArrowAlt } from '@styled-icons/boxicons-regular/LeftArrowAlt';
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt';
import Scoreboard from 'components/Scoreboard';
import { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Base from '../Base';
import { AuthContext } from 'contexts/AuthContext';
Modal.setAppElement('#__next');

export interface ScoreboardMatchProps {
  id: string;
  segundoQuadro: {
    segundoColisao: string;
    segundoAdversario: string;
  };
  primeiroQuadro: {
    primeiroColisao: string;
    primeiroAdversario: string;
  };
  dataPartida: string;
}
const Placar = () => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scoreboard, setScoreboard] = useState<ScoreboardMatchProps[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  function getScoreboard() {
    const data = localStorage.getItem('@colisao');
    const lastScoreboard = data ? JSON.parse(data) : [];
    const resultsMont = lastScoreboard.filter(
      (res: ScoreboardMatchProps) =>
        new Date(res.dataPartida).getMonth() === selectedDate.getMonth() &&
        new Date(res.dataPartida).getFullYear() === selectedDate.getFullYear()
    );
    setScoreboard(resultsMont);
  }
  useEffect(() => {
    getScoreboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate]);
  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }
  function handleChangeDate(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }
  return (
    <Base>
      <Container>
        <ModalScoreboard
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
        />
        <S.Wrapper>
          <S.WrapperMonth>
            <LeftArrowAlt size={40} onClick={() => handleChangeDate('prev')} />
            {format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}
            <RightArrowAlt size={40} onClick={() => handleChangeDate('next')} />
          </S.WrapperMonth>
          {!!scoreboard &&
            scoreboard.map((data, index) => (
              <div key={index}>
                <Scoreboard info={data} />
                {user?.isAdm && (
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
              </div>
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
    </Base>
  );
};

export default Placar;
