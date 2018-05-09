import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { tm } from './theme'
export default styled(Link)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: ${tm`color.secondary`};
  }
`
