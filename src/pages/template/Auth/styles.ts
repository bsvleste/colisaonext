import styled, { css } from 'styled-components';
import * as HeadingsStyles from 'components/Heading/styles';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;
  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr;
  `}
`;
export const BannerBlock = styled.div`
  ${({ theme }) => css`
    background-image: url(/img/logoColisao.png);
    background-size: cover;
    background-position: center center;
    width: 300px;
    height: 300px;

    margin: auto;
    ${media.lessThan('medium')`
        display: none;
      `}
  `}
`;
export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    position: relative;
    z-index: ${theme.layers.base};
    color: ${theme.colors.preto};
    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xxsmall};
    strong {
      color: ${theme.colors.preto};
    }
  `}
`;
export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.amareloMenu};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;
export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;
    ${media.greaterThan('medium')`
      width:36rem;
    `}

    ${HeadingsStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`;
