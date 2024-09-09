import React, {useId} from 'react'

const Input = ({
    label,
  
    className="",
    type,
    ...props
}, ref) => {
    const id = useId()
  return (
    <>
    {label ? <label htmlFor={id} className='ml-2'>{label}</label> : null}
    <input  type={type} className={`text-black outline-none px-5 ${className}`} {...props} ref={ref} id={id}/>
    </>
  )
}

export default React.forwardRef(Input)