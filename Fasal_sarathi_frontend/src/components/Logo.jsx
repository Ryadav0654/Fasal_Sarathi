import React from 'react'
// import logo from '../assets/Green Floral Agriculture Organic Wheat Farm Logo Design (1).svg'
import logo from '../assets/logo.png'
const Logo = ({className, props}) => {
  return (
    <>
        <img src={logo} alt="fasal_sarathi" className={`${className}`} {...props}/>
    </>
  )
}

export default Logo