import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Container = ({children}) => {
  return (
    <div className='bg-gradient-to-br from-green-300 via-emerald-50 to-green-200'>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}

export default Container