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

  function handleChangeDate(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }

  return (
    <Container>
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
            </div>
          ))}
      </S.Wrapper>
    </Container>
  );
};

export default Placar;
