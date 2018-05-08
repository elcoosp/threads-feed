import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { tm } from './theme'
export default styled(Link)`
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-align: center;
    color: white;
    padding: ${tm`spacing.medium`};
    text-decoration: none;
    transition: border 0.3s ease-in-out;
    border-bottom: 1px solid transparent;
  }
  &:hover {
    transition: border 0.3s ease-in-out;
    border-bottom: 1px solid white;
  }
`
