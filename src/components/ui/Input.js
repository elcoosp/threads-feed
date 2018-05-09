import styled from 'styled-components'
import { tm } from './theme'
export default styled.input`
  border-radius: ${tm`radius.small`};
  padding: ${tm`spacing.small`};
  border: 1px solid ${tm`color.secondary`};
  outline: none;
  box-shadow: 0px 0px rgba(0, 0, 0, 0);
  transition: box-shadow 0.3s ease-in-out;
  margin: ${tm`spacing.medium`};

  &:focus {
    box-shadow: ${tm`shadow.medium`};
    transition: box-shadow 0.3s ease-in-out;
  }
`
