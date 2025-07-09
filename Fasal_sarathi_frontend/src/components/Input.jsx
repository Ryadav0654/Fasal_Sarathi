import React, {useId} from 'react'
import PropTypes from 'prop-types'

Input.PropTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
}
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
    <input  type={type} className={`text-black outline-none px-5 ${className} placeholder:text-gray-500`} {...props} ref={ref} id={id}/>
    </>
  )
}

export default React.forwardRef(Input)