import { type FC } from 'react'
import { Star, MapPin, X } from 'react-feather'
import truncateText from '@/helpers/truncateText'
import sampleSrc from '@/assets/images/sample-restaurant.png'
import handleImageError from '@/helpers/handleImageError'

interface Props {
  name: string
  photo?: string
  ranking: number
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
  ranking,
  active,
  onToggle,
  onCloseDetail,
  isOnHover
}) => {
  return (
    <>
      <div
        className={`relative z-10 hover:z-20 hover:scale-[1.10] transition-transform duration-100 ease-in-out delay-0 ${isOnHover ? 'z-20' : ''}`}
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
              onError={handleImageError}
              alt={name}
            />

            <div className="flex flex-col justify-between pl-3 pr-2 leading-normal min-w-[140px]">
              <h5 className="flex flex-col">
                {ranking &&
                    <span className="flex items-center">
                      <Star size={12} fill="gold" color="gold"/>
                      <span className="text-sm ml-1">{ranking}</span>
                    </span>
                }
                <span className={`text-sm font-medium ${!ranking && 'mt-4'}`}>
                  {truncateText(name, 15)}
                </span>
              </h5>
            </div>
          </div>
      }
    </>
  )
}

export default Pin
