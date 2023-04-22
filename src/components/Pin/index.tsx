import { type FC } from 'react'
import { Star, MapPin, X } from 'react-feather'
import sampleSrc from '@/assets/images/sample-restaurant.png'

interface Props {
  name?: string
  photo?: string
  price?: any
  ranking?: number
  website?: string
  lat?: number
  lng?: number
  active: boolean
  onToggle: () => void
  onCloseDetail: () => void
  isOnHover: boolean
}

const Pin: FC<Props> = ({
  name,
  photo,
  price,
  ranking,
  active,
  onToggle,
  onCloseDetail,
  isOnHover
}) => {
  return (
    <>
      <div
        className={`relative z-10 hover:z-20 hover:scale-[1.10] ease-in-out duration-300 ${isOnHover ? 'z-20' : ''}`}
        onClick={onToggle}
      >
        <div
          className={`pin w-fit relative cursor-pointer min-h-4 min-w-4 px-[12px] py-[6px] rounded-lg mb-1 border border-solid border-transparent ease-in-out 
          ${isOnHover ? 'bg-gray-500 after:bg-gray-500' : 'bg-white after:bg-white'}`}>
          <MapPin size={16} color={isOnHover ? 'white' : 'black'} />
        </div>
      </div>

      {active &&
          <div className="relative z-30 flex bg-white border border-gray-50 rounded-lg shadow flex-row w-fit p-2 mt-2 ml-[-96px]">
            <X
              size={18}
              className="cursor-pointer absolute right-2 top-2"
              onClick={onCloseDetail}
            />

            <img
              className="object-cover rounded-lg h-[80px] w-[80px]"
              src={photo ?? sampleSrc}
              alt={name}
            />

            <div className="flex flex-col justify-between px-3 leading-normal min-w-[120px]">
              <h5 className="flex flex-col">
                {ranking &&
                    <span className="flex items-center">
                      <Star size={12} fill="gold" color="gold"/>
                      <span className="text-sm ml-1">{ranking}</span>
                    </span>
                }
                <span className="text-sm font-medium">{name?.slice(0, 18)}</span>
              </h5>
              <p className="text-sm text-gray-300">
                {price}
              </p>
            </div>
          </div>
      }
    </>
  )
}

export default Pin
