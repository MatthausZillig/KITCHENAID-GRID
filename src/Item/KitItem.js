import styled from 'styled-components'

export const KitItem = styled.div`
  display: flex;
  grid-column: ${props => props.col};
  grid-row: ${props => props.row};
  ${({ area }) => area && `grid-area: ${area}`};
  justify-self: ${props => props.js};
  align-self: ${props => props.as};
`
