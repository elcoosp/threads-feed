import styled, { keyframes } from 'styled-components'
import { tm } from './theme'

const fadeIn = keyframes`
from {
 opacity: 0;
}

to {
 opacity: 1;
}
`
export default styled.main`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`
