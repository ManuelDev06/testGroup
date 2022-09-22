import React from 'react'
import '../theme/Input.css'

const Input = ({text,onChange}) => {
  return (
      <input
        type = "text"
        className = "css-input"
        value = {text}
        onChange = {onChange}
      />
  )
}

export default Input;