import React from 'react'
// import logo from '../assets/Green Floral Agriculture Organic Wheat Farm Logo Design (1).svg'
// import logo from '../assets/footer-logo.png'
const Logo = ({className, props, imgUrl}) => {
  return (
    <>
        <img src={imgUrl} alt="fasal_sarathi" className={`${className}`} {...props}/>
    </>
  )
}

export default Logo