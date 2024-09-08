import React from 'react'

const Button = ({className, onClickHandler, btnName, ...props}) => {
  return (
    <>
    <button className={` ${className}`} onClick={onClickHandler} {...props}>{btnName}</button>
    </>
  )
}

export default Button