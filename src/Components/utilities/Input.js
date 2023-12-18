import React from 'react'

const Input = ({inputFun , inputLabel , inputPlaceHolder , inputType , id , className}) => {
  return (
    <div className={`${className}`}>
      <label className='mb-2' htmlFor={id}>{inputLabel}</label>
      <input onChange={inputFun} id={id} type={inputType} placeholder={inputPlaceHolder} className='p-2 mb-3 me-2' />                   
    </div>
  )
}

export default Input