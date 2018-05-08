import styled from 'styled-components'
import { tm } from './theme'
export default styled.header`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  background-image: ${tm`gradient.primary`};
  box-shadow: ${tm`shadow.medium`};
`
