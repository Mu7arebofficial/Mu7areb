import React from 'react'

const LayoutForm = (props) => {
    return (
        <div className='form-content mb-4 rounded'>
            <h1 className='text-white '>{props.header}</h1>
            {props.children}
        </div>
    )
}

export default LayoutForm