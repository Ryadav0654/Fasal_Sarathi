import React, {useId} from 'react'

const Input = ({
    label,
    className="",
    type,
    ...props
}, ref) => {
    const id = useId();
  return (
    <>
    {label ? <label htmlFor={id} className='lg:ml-2 lg:mb-2 '>{label}</label> : null}
    <input  type={type} className={`text-black focus:outline-green-500 m-1 px-5 ${className} placeholder:text-gray-500`} {...props} ref={ref} id={id}/>
    </>
  )
}

export default React.forwardRef(Input)