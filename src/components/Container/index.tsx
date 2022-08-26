import styled, { css } from 'styled-components';
import media from 'styled-media-query';
export const Container = styled.main`
  ${({ theme }) => css`
    margin-top: 60px;
    margin-bottom: 20px;
    max-width: ${theme.grid.container};
    margin-left: 8px;
    margin-right: 8px;
    padding-left: calc(${theme.grid.gutter}) / 2;
    padding-right: calc(${theme.grid.gutter}) / 2;

    ${media.greaterThan('medium')`
    max-width: 50rem;
    margin-left:auto;
    margin-right:auto;
    `}
  `}
`;
