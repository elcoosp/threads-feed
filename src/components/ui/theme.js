const color = {
  primary: '#89f7fe',
  secondary: '#667eea'
}

const gradient = {
  primary: 'linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)',
  secondary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
