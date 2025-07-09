
const Logo = ({className, props, imgUrl}) => {
  return (
    <>
        <img src={imgUrl} alt="fasal_sarathi" className={`${className}`} {...props}/>
    </>
  )
}

export default Logo