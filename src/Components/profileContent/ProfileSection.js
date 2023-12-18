import React from 'react'

const ProfileSection = ({title, content}) => {
    return (
    <div className='info d-flex justify-content-start  ps-3 align-items-center mb-4'>
        <h4 className='text-primary'> {title}:&nbsp;</h4>
        <h4>{content}</h4>
    </div>
    )
}

export default ProfileSection