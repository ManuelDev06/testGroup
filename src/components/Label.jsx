import React from 'react'
import '../theme/Label.css'

const Label = ({text="",isLabel}) => {
  return (
    <div>
      {isLabel
        ?<label>{text}</label>
        :<h1>{text}</h1>
      }
    </div>
  )
}

export default Label