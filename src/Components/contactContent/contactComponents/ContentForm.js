import React from 'react'

const ContentForm = () => {
    return (
        <form className='contact-form p-4 col-md-6 col-12'>
            <input className='w-100' type='text' placeholder='Your Name' name='user-name' required />
            <input  className='w-100' type='email' placeholder='Email' name='user-email' required/>
            <input  className='w-100' type='number' placeholder='Phone Number' name='phone' required/>
            <textarea className='w-100 ' placeholder='Your Comment' name='msg'></textarea>
            <button className='btn btn-dark'>Send</button>
        </form>
    )
}

export default ContentForm