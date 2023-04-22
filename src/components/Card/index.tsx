import { type FC } from 'react'
import { Star, MapPin } from 'react-feather'
import sampleSrc from '@/assets/images/sample-restaurant.png'

interface Props {
  name?: string
  photo?: string
  ranking?: number
  address?: string
  description?: string
  website?: string
  selected?: boolean
  refEl?: any
}

const Card: FC<Props> = ({
  photo,
  name,
  ranking,
  address,
  description,
  website
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-50 rounded-xl shadow">
      <a href={website} target="_blank" className="block pt-3 px-3" rel="noreferrer">
        <img className="rounded-xl object-cover h-[200px] w-full" src={photo ?? sampleSrc} alt="sample"/>
      </a>

      <div className="p-4">
        <a href={website} target="_blank" rel="noreferrer">
          <h5 className="flex justify-between items-start tracking-tight">
            <span className="text-base font-medium">{name}</span>
            {ranking &&
              <div className="flex justify-between items-center mt-1">
                <Star size={20} fill="gold" color="gold"/>
                <span className="text-sm ml-1">{ranking}</span>
              </div>
            }
          </h5>
        </a>

        <div className="mt-2 text-sm text-gray-300">
          <div className="flex">
            <MapPin size={14} className="mt-1 mr-1 min-w-[14px]" />
            {address}
          </div>
        </div>

        <p className="text-sm mt-2 font-normal text-gray-700">
          {description ? description?.slice(0, 115).concat('...') : ''}
        </p>
      </div>
    </div>

  )
}

export default Card
