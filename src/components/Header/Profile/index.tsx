import { type FC } from 'react'
import profileSrc from '@/assets/images/profile-user.png'

const Profile: FC = () => {
  return (
    <button type="button" className="flex items-center">
      <img src={profileSrc} width={20} alt="profile"/>
      <div className="pl-2">Sign In</div>
    </button>
  )
}

export default Profile
