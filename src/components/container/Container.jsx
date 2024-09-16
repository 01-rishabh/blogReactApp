import React, { Children } from 'react'

//container accept the properties in terms of children
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
      {Children}
    </div>
  )
}

export default Container
