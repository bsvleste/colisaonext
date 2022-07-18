import { useState, FormEvent, useEffect } from 'react';
import * as S from './styles';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { PlusCircle } from '@styled-icons/feather/PlusCircle';
import { MinusCircle } from '@styled-icons/feather/MinusCircle';
import Button from 'components/Button';
import Modal from 'react-modal';
import { v4 as uuid4 } from 'uuid';
import { api } from 'services/apiClient';
import { parseCookies } from 'nookies';
import Alert from 'components/Alert';
export type LineColors = 'amareloMenu' | 'preto';
export type ModalScoreboardProps = {
  title?: string;
  isOpen: boolean;
  id?: string;
  setIdToUpdate?: string;
  onRequestClose: (e: FormEvent) => void;
};
const ModalScoreboard = ({
  title,
  isOpen,
  setIdToUpdate,
  onRequestClose,
}: ModalScoreboardProps) => {
  const [successResult, setSuccesResult] = useState(false);
  const [disabledButton, setDisabledButton] = useState(false);
  const [dataPartida, setDataPartida] = useState('');
  const [messageFeedback, setMessageFeedback] = useState('');
  const [segundoColisao, setSegundoColisao] = useState(0);
  const [segundoAdversario, setSegundoAdversario] = useState(0);
  const [primeiroColisao, setPrimeiroColisao] = useState(0);
  const [primeiroAdversario, setPrimeiroAdversario] = useState(0);

  async function handleGetResultById() {
    const { 'nextauth.colisaoTokenIsAdm': tokenisAdm } = parseCookies();
    const config = {
      headers: {
        Authorization: `Bearer ${tokenisAdm}`,
      },
    };
    if (setIdToUpdate) {
      const { data } = await api.get(
        `/rotasAdm/editar/${setIdToUpdate}`,
        config
      );
      setDataPartida(new Date(data.dataPartida).toISOString());
      setSegundoColisao(data.segundoQuadro.segundoColisao);
      setSegundoAdversario(data.segundoQuadro.segundoAdversario);
      setPrimeiroColisao(data.primeiroQuadro.primeiroColisao);
      setPrimeiroAdversario(data.primeiroQuadro.primeiroAdversario);
    }
  }
  useEffect(() => {
    handleGetResultById();
    console.log('OLa scoere');
  }, [setIdToUpdate]);
  function handleChekIsLessThanZero(e: FormEvent) {
    switch (e.currentTarget.id) {
      case 'segundoColisao':
        if (segundoColisao <= 0) {
          return;
        }
        setSegundoColisao((count) => count - 1);
        break;
      case 'segundoAdv':
        if (segundoAdversario <= 0) {
          return;
        }
        setSegundoAdversario((count) => count - 1);
        break;
      case 'primeiroColisao':
        if (primeiroColisao <= 0) {
          return;
        }
        setPrimeiroColisao((count) => count - 1);
        break;
      case 'primeiroAdv':
        if (primeiroAdversario <= 0) {
          return;
        }
        setPrimeiroAdversario((count) => count - 1);
        break;

      default:
        break;
    }
  }
  async function handleSaveScoreboard(e: FormEvent) {
    const { 'nextauth.colisaoTokenIsAdm': tokenisAdm } = parseCookies();
    const config = {
      headers: {
        Authorization: `Bearer ${tokenisAdm}`,
      },
    };
    if (setIdToUpdate) {
      e.preventDefault();
      const scoreboard = {
        segundoQuadro: {
          segundoColisao,
          segundoAdversario,
        },
        primeiroQuadro: {
          primeiroColisao,
          primeiroAdversario,
        },
        dataPartida: new Date(dataPartida),
      };
      const res = await api.post(
        `/rotasAdm/update/${setIdToUpdate}`,
        scoreboard,
        config
      );
      if (res.data.success) {
        setSuccesResult(true);
        setDisabledButton(true);
        setMessageFeedback('Alterado com Sucesso');
        setTimeout(function () {
          setSuccesResult(false);
          setSegundoColisao(0);
          setSegundoAdversario(0);
          setPrimeiroAdversario(0);
          setPrimeiroColisao(0);
          setDisabledButton(false);
        }, 2000);
      }
    } else {
      e.preventDefault();
      const scoreboard = {
        id: uuid4(),
        segundoQuadro: {
          segundoColisao,
          segundoAdversario,
        },
        primeiroQuadro: {
          primeiroColisao,
          primeiroAdversario,
        },
        dataPartida: new Date(dataPartida),
      };
      const res = await api.post('/rotasAdm/criaPlacar', scoreboard, config);
      if (res.data.success) {
        setSuccesResult(true);
        setDisabledButton(true);
        setMessageFeedback('Cadastrado com Sucesso');

        setTimeout(function () {
          setSuccesResult(false);
          setSegundoColisao(0);
          setSegundoAdversario(0);
          setPrimeiroAdversario(0);
          setPrimeiroColisao(0);
          setDisabledButton(false);
        }, 2000);
      }
    }
  }
  async function handleDeleteScoreboard() {
    const { 'nextauth.colisaoTokenIsAdm': tokenisAdm } = parseCookies();
    const config = {
      headers: {
        Authorization: `Bearer ${tokenisAdm}`,
      },
    };
    const res = await api.delete(`/rotasAdm/deleta/${setIdToUpdate}`, config);
    if (res.data.success) {
      setSuccesResult(true);
      setDisabledButton(true);
      setMessageFeedback('Deletado com Sucesso');
      setTimeout(function () {
        setSuccesResult(false);
        setDisabledButton(false);
      }, 2000);
    }
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
        {successResult && (
          <Alert backgroundColor="verde">{messageFeedback}</Alert>
        )}
        <S.Header>
          <S.WrapperTitle>{title} Resultado</S.WrapperTitle>
          <S.WrapperButtonClose>
            <CloseOutline size={30} onClick={onRequestClose} />
          </S.WrapperButtonClose>
        </S.Header>
        {title === 'Excluir' ? (
          'Deletar o resultado?'
        ) : (
          <>
            <S.Scoreboard>
              <input
                value={dataPartida.slice(0, 10)}
                type="date"
                name="date"
                id="datajogo"
                placeholder="Escolha um data"
                onChange={(e) => setDataPartida(e.target.value)}
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
                        onClick={() =>
                          setSegundoAdversario((count) => count + 1)
                        }
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
                        onClick={() =>
                          setPrimeiroAdversario((count) => count + 1)
                        }
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
          </>
        )}
      </S.Wrapper>
      <Button
        backgroundColor="amareloMenu"
        color="preto"
        fullWidth
        onClick={
          title === 'Excluir' ? handleDeleteScoreboard : handleSaveScoreboard
        }
        disabled={disabledButton}
      >
        {title === 'Excluir' ? 'Excluir' : 'Salvar'}
      </Button>
    </Modal>
  );
};

export default ModalScoreboard;
