import React from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../Components/hooks/useFetch'
import ProfileSection from '../Components/profileContent/ProfileSection'
const Profile = () => {
  const user = useSelector(state => state.cart.userData)
  const userData = useFetch(user && `users/${user.id}`, 'GET')
  return (
    <div className="profile ">
      <div className="container">
        {userData?.data?.data?.choosenUser.avatar.includes('http') && (
          <div className="profileImage mb-3 mt-2 d-flex justify-content-center">
            <img src={userData?.data?.data?.choosenUser.avatar} alt="profileImage" />
          </div>
        )}
        <h3 className="text-start text-primary mb-4">Hello {userData?.data?.data?.choosenUser.firstName}</h3>
        <div className="profile-content d-flex flex-column align-items-start">
          <ProfileSection
            title="Your Name"
            content={`${userData?.data?.data?.choosenUser.firstName} ${userData?.data?.data?.choosenUser.lastName}`}
          />
          <ProfileSection title="Your email" content={userData?.data?.data?.choosenUser.email} />
          <ProfileSection
            title="Confirmed"
            content={userData?.data?.data?.choosenUser.role === 'ADMIN' ? 'true' : 'false'}
          />
          <ProfileSection title="Privilage" content={userData?.data?.data?.choosenUser.role} />
        </div>
      </div>
    </div>
  )
}

export default Profile
