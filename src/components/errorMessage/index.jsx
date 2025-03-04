import React from 'react'
// Component that displays an error message
const ErrorMessage = (props) => {
  return (
    <div>
      <p className="error">{props.message}</p>
    </div>
  )
}

export default ErrorMessage
