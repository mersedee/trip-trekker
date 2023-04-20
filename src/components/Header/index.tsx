import { type Dispatch, type FC, type SetStateAction } from 'react'
import logoSrc from '@/assets/images/logo.svg'
import Search from '@/components/Header/Search'
import Profile from '@/components/Header/Profile'
import { type Coordinates } from '@/types'

interface Props {
  setCoordinates: Dispatch<SetStateAction<Coordinates>>
}

const Header: FC<Props> = ({ setCoordinates }) => {
  return (
    <div className="grid md:grid-cols-3 grid-flow-col grid-cols-none items-center bg-gray-50 px-4 py-4">

      <img src={logoSrc} alt="trip" width={35}/>

      <div className="lg:px-12 px-0 min-w-[225px]">
        <Search setCoordinates={setCoordinates} />
      </div>

      <div className="flex justify-end">
        <Profile />
      </div>
    </div>
  )
}

export default Header
