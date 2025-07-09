

const Button = ({className, onClickHandler, btnname, ...props}) => {
  // console.log({...props})
  return (
    <>
    <button className={` ${className}`} onClick={onClickHandler} {...props}>{btnname}</button>
    </>
  )
}

export default Button