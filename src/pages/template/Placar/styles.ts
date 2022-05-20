import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`
export const WrapperScorebaord = styled.section`
  margin-top: 8px;
`

export const WrapperButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
  margin-top: 8px;
  ${media.greaterThan('medium')`
  flex-direction: row;

  `}
`

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;

  ${media.greaterThan('medium')`
  flex-direction: row;

  `}
`