import { type FC, type SyntheticEvent } from 'react'
import { Star, MapPin } from 'react-feather'
import truncateText from '@/helpers/truncateText'
import sampleSrc from '@/assets/images/sample-restaurant.png'
import handleImageError from '@/helpers/handleImageError'

interface Props {
  name: string
  type: string
  photo?: string
  ranking?: number
  address?: string
  description?: string
  details?: any
  website?: string
  selected?: boolean
  refEl?: any
}

const Card: FC<Props> = ({
  photo,
  name,
  type,
  ranking,
  address,
  description,
  website,
  details
}) => {
  const generateDescription = (): string => {
    if (description) return truncateText(description, 60)

    if (details?.Offerings) {
      const offerings = Object.entries(details.Offerings)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(', ')
      return offerings
        ? `The ${type} offers ${truncateText(offerings, 45)}`
        : ''
    }

    if (details?.Amenities) {
      const kidAmenity = 'Good for kids'
      const amenities = Object.entries(details.Amenities)
        .filter(([, value]) => value)
        .map(([key]) => key)
      if (amenities.length === 0) {
        return ''
      } else if (amenities.length === 1 && amenities[0] === kidAmenity) {
        return `The ${type} is good for kids`
      } else {
        const hasKidsAmenity = amenities.includes(kidAmenity)
        const otherAmenities = amenities
          .filter((amenity) => amenity !== kidAmenity)
          .join(', ')
        return hasKidsAmenity
          ? `The ${type} is good for kids and has ${truncateText(
            otherAmenities,
            45
          )}`
          : `The ${type} has ${truncateText(otherAmenities, 45)}`
      }
    }

    return ''
  }

  return (
    <div className="h-full max-w-sm bg-white border border-gray-50 rounded-xl shadow">
      <a href={website} target="_blank" className="block pt-3 px-3" rel="noreferrer">
        <img
          className="rounded-xl object-cover h-[200px] w-full"
          src={photo ?? sampleSrc}
          onError={handleImageError}
          alt={name}
        />
      </a>

      <div className="p-4">
        <a href={website} target="_blank" rel="noreferrer">
          <h5 className="flex justify-between items-start tracking-tight">
            <span className="text-base font-medium">
              {truncateText(name, 29)}
            </span>
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

        <ul className="flex flex-wrap list-none mt-2">
          {generateDescription()}
        </ul>
      </div>
    </div>

  )
}

export default Card
