import { type FC } from 'react'
import PlaceList from '@/pages/Home/ContentSection/PlaceList'
import { Map } from '@/components'
import { type Coordinates, type Place } from '@/types'

const coordinates: Coordinates = { lat: 52.377956, lng: 4.897070 }

interface Props {
  isLoading: boolean
  places: Place[]
  filteredPlaces: Place[]
  showMap: boolean
  placeHoveredId: string | null
  onHoverPlace: (arg: string | null) => void
}

const ContentSection: FC<Props> = ({
  isLoading,
  places,
  filteredPlaces,
  showMap,
  placeHoveredId,
  onHoverPlace
}) => {
  const filtered = filteredPlaces?.length ? filteredPlaces : places

  const mapProps = {
    hoverId: placeHoveredId,
    places: filtered,
    className: 'sticky h-[calc(100vh_-_142px)] top-[142px]',
    coordinates
  }

  const placeListProps = {
    className: 'my-4',
    loading: isLoading,
    onHover: onHoverPlace,
    places: filtered
  }

  return (
    <>
      <div className="md:grid hidden grid-cols-2 pl-4">
        <PlaceList {...placeListProps}/>
        <Map {...mapProps}/>
      </div>

      <div className="md:hidden block">
        {showMap ? <Map {...mapProps}/> : <PlaceList {...placeListProps} />}
      </div>
    </>
  )
}

export default ContentSection
