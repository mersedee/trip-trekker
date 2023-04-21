import { type FC, type Dispatch, type SetStateAction, useState } from 'react'
import GoogleMapReact from 'google-map-react'
import { type Coordinates, type Bounds, type Place } from '@/types'
import Pointer from '@/components/Pointer'
import styles from './styles'

interface Props {
  coordinates: Coordinates
  setCoordinates: Dispatch<SetStateAction<Coordinates>>
  setBounds: Dispatch<SetStateAction<Bounds>>
  className?: string
  places: Place[]
}

const Map: FC<Props> = ({
  places,
  coordinates,
  setCoordinates,
  setBounds,
  className
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const key = import.meta.env.VITE_MAP_API_KEY
  const defaultProps = {
    center: coordinates,
    zoom: 11
  }

  const onChange = (e: any): void => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
  }

  const handleToggle = (index: number): void => { setActiveIndex(index) }

  return (
    <div className={className}>
      <GoogleMapReact
        style={{ height: '90vh', width: '100%' }}
        bootstrapURLKeys={{ key }}
        center={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={onChange}
        options={{ disableDefaultUI: true, zoomControl: true, styles }}
      >
        {places?.map((place, index) =>
          <Pointer
            key={place.place_id}
            name={place.name}
            photo={place.photos_sample[0].photo_url}
            ranking={place.rating}
            price={place.price_level}
            lat={place.latitude}
            lng={place.longitude}
            website={place.website}
            active={index === activeIndex}
            onToggle={() => { handleToggle(index) }}
          />)
        }
      </GoogleMapReact>
    </div>
  )
}

export default Map
