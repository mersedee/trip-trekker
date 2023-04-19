import { type FC, type Dispatch, type SetStateAction } from 'react'
import GoogleMapReact from 'google-map-react'
import { type Coordinates, type Bounds, type Restaurant } from '@/types'
import Pointer from '@/components/Pointer'

interface Props {
  coordinates: Coordinates
  setCoordinates: Dispatch<SetStateAction<Coordinates>>
  setBounds: Dispatch<SetStateAction<Bounds | null>>
  className?: string
  places: Restaurant[]
}

const Map: FC<Props> = ({
  places,
  coordinates,
  setCoordinates, setBounds,
  className
}) => {
  const key = import.meta.env.VITE_MAP_API_KEY

  const defaultProps = {
    center: coordinates,
    zoom: 11
  }

  const onChange = (e: any): void => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng })
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
  }

  return (
    <div className={className}>
      <GoogleMapReact
        style={{ height: '90vh', width: '100%' }}
        bootstrapURLKeys={{ key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onChange={onChange}
      >
        {places?.map((place, index) => (
          <Pointer
            key={index}
            name={place.name}
            photo={place.photo?.images.large.url}
            ranking={place.raw_ranking}
            price={place.price}
            website={place.website}
            lat={place.latitude}
            lng={place.longitude}
          />
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Map
