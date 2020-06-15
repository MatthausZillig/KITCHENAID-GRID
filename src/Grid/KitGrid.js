import styled from './node_modules/styled-components'

const formatAreas = areas => areas.map(area => `"${area}"`).join(' ')

export const KitGrid = styled.section`
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
  ${({ areas }) => areas && `grid-template-areas: ${formatAreas(areas)}`};
  grid-gap: ${({ gap }) => gap};
  height: ${({ height }) => (height ? height : 'auto')};
  ${({ justifyContent }) => justifyContent && `justify-content: ${jc}`};
  ${({ alignContent }) => alignContent && `align-content: ${ac}`};
  @media (max-width: 480px) {
    ${({ mobileareas }) => mobile - areas && `grid-template-areas: ${formatAreas(mobile - areas)}`};
  }
`
