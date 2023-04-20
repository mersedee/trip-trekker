import { type FC, useEffect, useState } from 'react'
import { Header, Map, DropDown } from '@/components'
import { getPlaces } from '@/api'
import { useWindowSize } from '@/hooks/useWindowSize'
import { type Restaurant, type Bounds, type Coordinates, type Menu } from '@/types'
import PlaceList from '@/pages/Home/PlaceList'

const menus = [
  { label: 'Restaurants', value: 'restaurants' },
  { label: 'Hotels', value: 'hotels' },
  { label: 'Attractions', value: 'attraction' }
]

const rates = [
  { value: '0', label: 'All' },
  { value: '3', label: 'Above 3.0' },
  { value: '4', label: 'Above 4.0' },
  { value: '4.5', label: 'Above 4.5' }
]

const Home: FC = () => {
  const windowSize = useWindowSize()
  const [showMap, setShowMap] = useState<boolean>(true)
  const [places, setPlaces] = useState<Restaurant[]>([])
  const [filteredPlaces, setFilteredPlaces] = useState<Restaurant[]>([])
  const [coordinates, setCoordinates] = useState<Coordinates>({ lat: 52.13, lng: 5.29 })
  const [bounds, setBounds] = useState<Bounds>({} as any)
  const [rating, setRating] = useState<Menu>({ label: 'Rating', value: '0' })
  const [type, setType] = useState<Menu>({ label: 'Type', value: 'restaurants' })

  useEffect(() => {
    if (bounds.ne && bounds.sw) {
      getPlaces(type.value, bounds.ne, bounds.sw).then((data) => {
        setPlaces(data?.filter((place: Restaurant) => place.name))
        setFilteredPlaces([])
      })
        .catch((error) => { console.log(error) })
    }
  }, [type, bounds])

  useEffect(() => {
    const filtered = places.filter(place => Number(place.rating) > Number(rating.value))
    setFilteredPlaces(filtered)
  }, [rating])

  const onToggleMap = (): void => { setShowMap((prevState: boolean) => !prevState) }

  return (
    <>
      <Header setCoordinates={setCoordinates} />

      <div className="flex flex-wrap gap-6 px-4 my-4">
        <DropDown
          menus={menus}
          width={150}
          selectedOption={type}
          setSelectedOption={setType}
        />
        <DropDown
          menus={rates}
          width={150}
          selectedOption={rating}
          setSelectedOption={setRating}
        />
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
          <PlaceList places={filteredPlaces.length ? filteredPlaces : places} />
          <Map
            places={filteredPlaces.length ? filteredPlaces : places}
            className="relative rounded-xl overflow-hidden"
            coordinates={coordinates}
            setCoordinates={setCoordinates}
            setBounds={setBounds}
          />
        </div>
        : <div className="px-4">
          {showMap
            ? <Map
              places={filteredPlaces.length ? filteredPlaces : places}
              className="relative rounded-xl overflow-hidden"
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              setBounds={setBounds}
            />
            : <PlaceList places={filteredPlaces.length ? filteredPlaces : places} />
          }
        </div>
      }
    </>
  )
}

export default Home
