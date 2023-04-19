import { type FC, useEffect, useState } from 'react'
import { Header, Map, DropDown } from '@/components'
import { getPlaces } from '@/api'
import { useWindowSize } from '@/hooks/useWindowSize'
import { type Restaurant, type Bounds, type Coordinates } from '@/types'
import PlaceList from '@/pages/Home/PlaceList'

const menus = [
  { label: 'Restaurants', value: 'restaurant' },
  { label: 'Hotels', value: 'hotels' },
  { label: 'Attractions', value: 'attraction' }
]

const rates = [
  { value: '0', label: 'All' },
  { value: '3', label: 'Above 3.0' },
  { value: '4', label: 'Above 4.0' },
  { value: '5', label: 'Above 4.5' }
]

const Home: FC = () => {
  const windowSize = useWindowSize()
  const [showMap, setShowMap] = useState<boolean>(true)
  const [places, setPlaces] = useState<Restaurant[]>([])
  const [coordinates, setCoordinates] = useState<Coordinates>({ lat: 52.13, lng: 5.29 })
  const [bounds, setBounds] = useState<Bounds | null>(null)

  useEffect(() => {
    if (bounds !== null) {
      getPlaces(bounds.ne, bounds.sw).then((data) => { setPlaces(data) })
        .catch((error) => { console.warn(error) })
    }
  }, [coordinates, bounds])

  const onToggleMap = (): void => { setShowMap((prevState: boolean) => !prevState) }

  return (
    <>
      <Header />

      <div className="flex flex-wrap gap-6 px-4 my-4">
        <DropDown label="Type" menus={menus} width={150} />
        <DropDown label="Rates" menus={rates} width={150} />
        {windowSize.width > 768
          ? null
          : <button
            type="button"
            onClick={onToggleMap}
            className="text-sm border border-gray-50 w-[150px] text-center focus:outline-none py-2.5 font-medium rounded-lg">
            {showMap ? 'Hide' : 'Show'} Map
          </button>
        }
      </div>

      {windowSize.width > 768
        ? <div className="grid grid-cols-2 px-4">
          <PlaceList places={places} />
          <Map
            places={places}
            className="relative rounded-xl overflow-hidden"
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </div>
        : <div className="px-4">
          {showMap
            ? <Map
              places={places}
              className="relative rounded-xl overflow-hidden"
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
            />
            : <PlaceList places={places} />
          }
        </div>
      }
    </>
  )
}

export default Home
