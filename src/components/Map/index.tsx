import { type FC, type Dispatch, type SetStateAction } from 'react'
import GoogleMapReact from 'google-map-react'
import { type Coordinates, type Bounds } from '@/types'

interface Props {
  coordinates: Coordinates
  setCoordinates: Dispatch<SetStateAction<Coordinates>>
  setBounds: Dispatch<SetStateAction<Bounds | null>>
}

const Map: FC<Props> = ({ coordinates, setCoordinates, setBounds }) => {
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
    <GoogleMapReact
      style={{ height: '100vh', width: '100%' }}
      bootstrapURLKeys={{ key }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
      onChange={onChange}
    />
  )
}

export default Map
