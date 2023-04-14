import { type FC } from 'react'
import GoogleMapReact from 'google-map-react'

const Map: FC = () => {
  const key = import.meta.env.REACT_APP_MAP_API_KEY

  const defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 14
  }

  return (
    <GoogleMapReact
      style={{ height: '100vh', width: '100%' }}
      bootstrapURLKeys={{ key }}
      defaultCenter={defaultProps.center}
      defaultZoom={defaultProps.zoom}
    />
  )
}

export default Map
