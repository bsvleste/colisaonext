import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 8px;
`;
export const WrapperScorebaord = styled.section`
  margin-top: 8px;
`;

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
  margin-top: 8px;
  ${media.greaterThan('medium')`
  flex-direction: row;

  `}
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;

  ${media.greaterThan('medium')`
  flex-direction: row;

  `}
`;
export const WrapperMonth = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align: center;
    color: ${theme.colors.amareloMenu};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: bold;
    svg {
      cursor: pointer;
    }
  `}
`;
