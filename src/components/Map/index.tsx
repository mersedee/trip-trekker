import { type FC, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { type Coordinates, type Place } from '@/types'
import Pin from '@/components/Pin'
import styles from './styles'

interface Props {
  coordinates: Coordinates
  className?: string
  places: Place[]
}

const Map: FC<Props> = ({
  places,
  coordinates,
  className
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const key = import.meta.env.VITE_MAP_API_KEY
  const defaultProps = {
    center: coordinates,
    zoom: 13
  }

  const handleToggle = (index: number): void => { setActiveIndex(index) }

  const onCloseDetail = (): void => { setActiveIndex(null) }

  return (
    <div className={className}>
      <GoogleMapReact
        style={{ height: '90vh', width: '100%' }}
        bootstrapURLKeys={{ key }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options={{ disableDefaultUI: true, styles }}
      >
        {places?.map((place, index) =>
          <Pin
            key={place.place_id}
            name={place.name}
            photo={place.photos_sample ? place.photos_sample[0]?.photo_url : undefined}
            ranking={place.rating}
            price={place.price_level}
            lat={place.latitude}
            lng={place.longitude}
            website={place.website}
            active={index === activeIndex}
            onToggle={() => { handleToggle(index) }}
            onCloseDetail={onCloseDetail}
          />)
        }
      </GoogleMapReact>
    </div>
  )
}

export default Map
