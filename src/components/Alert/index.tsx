import * as S from './styles';
export type LineColors = 'verde' | 'vermelho';
export type AlertProps = {
  children?: React.ReactNode;
  backgroundColor?: LineColors;
};
const Alert = ({ children, backgroundColor }: AlertProps) => {
  return (
    <S.Wrapper backgroundColor={backgroundColor}>
      <S.Children>{children}</S.Children>
    </S.Wrapper>
  );
};

export default Alert;
