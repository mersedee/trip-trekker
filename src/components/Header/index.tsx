import { type FC } from 'react'
import logoSrc from '@/assets/images/logo.svg'
import Profile from '@/components/Header/Profile'

const Header: FC = () => {
  return (
    <div className="grid md:grid-cols-2 grid-flow-col grid-cols-none items-center bg-gray-50 px-4 py-4">

      <img src={logoSrc} alt="trip" width={35}/>

      <div className="flex justify-end">
        <Profile />
      </div>
    </div>
  )
}

export default Header
