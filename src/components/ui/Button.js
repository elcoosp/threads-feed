import styled from 'styled-components'
import { tm } from './theme'
export default styled.button`
  border: none;
  color: white;
  border-radius: ${tm`radius.small`};
  padding: ${tm`spacing.small`};
  text-align: center;
  cursor: pointer;
  background-image: ${tm`gradient.secondary`};
  transition: border 0.3s ease-in-out;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  box-shadow: ${tm`shadow.medium`};
  &:hover {
    transition: border 0.3s ease-in-out;
    border-bottom: 3px solid white;
  }
`
