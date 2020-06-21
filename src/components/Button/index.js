import React from 'react'
import StyledButton from './style'
import theme from '../../theme'

const Button = ({ children, color = theme.primaryColor, size="primary", ...rest }) => {
  return (
    <StyledButton color={color} size={size} {...rest}>{children}</StyledButton>
  )
}

export default Button