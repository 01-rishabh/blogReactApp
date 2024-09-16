import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props     //addition properties passed by the user
}, ref){            //passing the reference

    const id = useId()
    return (
        <div className='w-full'>
            {label && <label
            className='inline-block mb-1 pl-1'
            htmlFor={id}>               //using for accessibility purpose
                {label}
            </label>}
            <input 
             type={type}
             className={`px-3 py-2 rounded-lg bg-white text-black outline-non focus:bg-gray-500 duration-200 border border-gray-200 w-full ${className}`}
             ref={ref}
             {...props}
             id={id}
            />
        </div>
    )
}) 

export default Input
