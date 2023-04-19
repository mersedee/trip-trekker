import { type FC } from 'react'
import { Star, MapPin, ChevronDown } from 'react-feather'
import sampleSrc from '@/assets/images/sample-restaurant.png'

interface Props {
  name?: string
  photo?: string
  price?: string
  ranking?: string
  website?: string
  lat?: string
  lng?: string
  active: boolean
  onToggle: () => void
}

const Pointer: FC<Props> = ({
  name,
  photo,
  price,
  ranking,
  website,
  active,
  onToggle
}) => {
  return (
    <>
      <div
        className="relative bg-gray-500 rounded-lg p-2 w-fit h-fit hover:scale-[1.10] ease-in-out duration-300"
        onClick={onToggle}
      >
        <MapPin color="white" size={16} />
        <ChevronDown
          className="absolute left-[50%] mt-[-2px]"
          style={{ transform: 'translateX(-50%)' }}
          color="#24282b"
          fill="#24282b"
        />
      </div>

      {active &&
          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="flex bg-white border border-gray-50 rounded-lg shadow flex-row w-fit p-2 mt-2 ml-[-96px] relative z-10 cursor-pointer"
          >
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
      }
    </>
  )
}

export default Pointer
