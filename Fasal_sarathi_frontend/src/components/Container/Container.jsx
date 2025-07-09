import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import PropTypes from 'prop-types'

Container.propTypes = {
  children: PropTypes.node
}
const Container = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}

export default Container