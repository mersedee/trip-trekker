import { type FC } from 'react'
import { Star } from 'react-feather'
import sampleSrc from '@/assets/images/sample-restaurant.png'

interface Props {
  name?: string
  photo?: string
  price?: string
  website?: string
  ranking?: string
  lat?: string
  lng?: string
}

const Pointer: FC<Props> = ({
  name,
  photo,
  price,
  website,
  ranking,
  lat,
  lng
}) => {
  return (
    <div data-lat={lat} data-lng={lng}>
      <a
        href={website ?? '/'}
        target="_blank"
        rel="noreferrer"
        className="flex bg-white border border-gray-50 rounded-lg shadow flex-row w-fit p-2">
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
                <span className="text-sm ml-1">{Math.round(+ranking * 2) / 2}</span>
              </span>
            }
            <span className="text-sm font-medium">{name?.slice(0, 18)}</span>
          </h5>
          <p className="text-sm text-gray-300">
            {price}
          </p>
        </div>
      </a>
    </div>
  )
}

export default Pointer
