import React from 'react'

const Input = (props) => {
    return (
        <div className='input'> 
        <label className='me-2 fs-5 mb-1' htmlFor={props.name} >{props.label}</label>
        <input className={`p-3 rounded w-100 ${props.isValueTouched && !props.isValueValid && 'bg-danger'}`} type={props.type} name={props.name} id={props.name} 
        onBlur={props.blurFunction} onChange={props.handleFunction} value={props.value}/>
        { props.isValueTouched && !props.isValueValid && <p className='text-danger mt-1'>{props.message}</p>}
    </div>   
    )
}

export default Input