const color = {
  primary: '#f9d423',
  secondary: '#321575',
  warning: '#f77062'
}
const gradient = {
  primary: 'linear-gradient(to top left, #e14fad 0%, #f9d423 100%)',
  secondary: 'linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)'
}

const spacing = {
  small: '8px',
  medium: '12px',
  large: '16px'
}

const radius = {
  small: '5px',
  medium: '10px',
  large: '15px'
}

const shadow = {
  small: '0 1px 5px rgba(0, 0, 0, 0.05)',
  medium: '0 1px 5px rgba(0, 0, 0, 0.15)',
  large: '0 1px 5px rgba(0, 0, 0, 0.25)'
}
const path = obj => (...arrOfKeys) =>
  arrOfKeys.reduce((acc, key) => acc[key], obj)

export const tm = ([pathDotNotation]) => props =>
  path(props.theme)(...pathDotNotation.split('.'))

export default {
  shadow,
  color,
  radius,
  gradient,
  spacing
}
