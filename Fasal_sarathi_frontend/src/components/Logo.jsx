import PropTypes from 'prop-types'

Logo.propTypes = {
  className: PropTypes.string,
  props: PropTypes.object,
  imgUrl: PropTypes.string
}
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