import styled from 'styled-components'
import { tm } from './theme'
export default styled.ul`
  display: flex;
  flex-flow: row wrap;
  padding: ${tm`spacing.medium`};
  min-height: 50px;
  justify-content: start;
  align-items: center;
  color: white;
  list-style: none;
  margin: 0;
  text-decoration: none;

  > :last-child {
    margin-left: auto;
  }
`
