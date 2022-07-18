import Button from 'components/Button';
import ModalScoreboard from 'components/ModalScoreboard';
import { Container } from 'components/Container';
import { LeftArrowAlt } from '@styled-icons/boxicons-regular/LeftArrowAlt';
import { RightArrowAlt } from '@styled-icons/boxicons-regular/RightArrowAlt';
import Scoreboard from 'components/Scoreboard';
import { FormEvent, useEffect, useState } from 'react';
import Modal from 'react-modal';
import * as S from './styles';
import { addMonths, format, subMonths } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { api } from 'services/apiClient';
import Can from 'components/Can';
Modal.setAppElement('#__next');

export interface ScoreboardMatchProps {
  _id: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getIdToUpdate, setGetIdToUpdate] = useState('');
  const [scoreboard, setScoreboard] = useState<ScoreboardMatchProps[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [title, setTitle] = useState('');
  async function getScoreboard() {
    const { data } = await api.get('/placar');
    /* const res = localStorage.getItem('@colisao'); */
    const resultsMont = data.filter(
      (res: ScoreboardMatchProps) =>
        new Date(res.dataPartida).getMonth() === selectedDate.getMonth() &&
        new Date(res.dataPartida).getFullYear() === selectedDate.getFullYear()
    );
    setScoreboard(resultsMont);
  }
  useEffect(() => {
    getScoreboard();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDate, isModalOpen]);

  function handleChangeDate(action: 'next' | 'prev') {
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }
  function handleOpenCloseModal(e: FormEvent) {
    setIsModalOpen(!isModalOpen);
    setGetIdToUpdate(e.currentTarget.id);
    if (e.currentTarget.name === '') {
      setTitle('Novo');
    } else {
      setTitle(e.currentTarget.name);
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
          scoreboard.map((data) => (
            <div key={data._id}>
              <Scoreboard
                info={data}
                onRequestOpenModal={handleOpenCloseModal}
              />
            </div>
          ))}
      </S.Wrapper>
      <Can roles={['administrator']}>
        <Button
          backgroundColor="amareloMenu"
          color="preto"
          fullWidth
          onClick={handleOpenCloseModal}
        >
          Criar novo Placar
        </Button>
      </Can>
      <ModalScoreboard
        isOpen={isModalOpen}
        onRequestClose={handleOpenCloseModal}
        setIdToUpdate={getIdToUpdate}
        title={title}
      />
    </Container>
  );
};

export default Placar;
