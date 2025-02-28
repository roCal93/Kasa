import React from 'react'

const ErrorMessage = (props) => {
  return (
    <div>
      <p className="error">{props.message}</p>
    </div>
  )
}

export default ErrorMessage
